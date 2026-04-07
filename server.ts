import express from 'express';
import { createServer as createViteServer } from 'vite';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Proxy endpoint to bypass X-Frame-Options
  app.get('/api/proxy', async (req, res) => {
    const targetUrl = req.query.url as string;
    const lat = req.query.lat as string;
    const lng = req.query.lng as string;
    const ip = req.query.ip as string;
    
    if (!targetUrl) {
      return res.status(400).send('URL is required');
    }

    // Basic URL validation
    try {
      new URL(targetUrl);
    } catch (e) {
      return res.status(400).send('Invalid URL format. Please include http:// or https://');
    }

    try {
      const response = await axios.get(targetUrl, {
        headers: {
          'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
          'X-Forwarded-For': ip || '192.168.1.1',
        },
        timeout: 15000,
        validateStatus: () => true, // Handle all status codes
      });

      // Remove security headers that prevent iframe embedding
      res.removeHeader('X-Frame-Options');
      res.removeHeader('Content-Security-Policy');
      
      // Set content type
      res.setHeader('Content-Type', response.headers['content-type'] || 'text/html');

      let data = response.data;

      // If it's HTML, inject a <base> tag and geolocation spoofing
      if (typeof data === 'string' && (response.headers['content-type']?.includes('text/html') || targetUrl.endsWith('.html'))) {
        const baseUrl = new URL(targetUrl).origin;
        
        // Geolocation spoofing script
        const geoScript = `
          <script>
            (function() {
              const lat = ${lat || 0};
              const lng = ${lng || 0};
              
              const mockGeolocation = {
                getCurrentPosition: (success, error, options) => {
                  success({
                    coords: {
                      latitude: lat,
                      longitude: lng,
                      accuracy: 10,
                      altitude: null,
                      altitudeAccuracy: null,
                      heading: null,
                      speed: null
                    },
                    timestamp: Date.now()
                  });
                },
                watchPosition: (success, error, options) => {
                  success({
                    coords: {
                      latitude: lat,
                      longitude: lng,
                      accuracy: 10,
                      altitude: null,
                      altitudeAccuracy: null,
                      heading: null,
                      speed: null
                    },
                    timestamp: Date.now()
                  });
                  return 1;
                },
                clearWatch: () => {}
              };
              
              Object.defineProperty(navigator, 'geolocation', {
                value: mockGeolocation,
                configurable: true
              });
              
              console.log('StealthView: Geolocation spoofed to ' + lat + ', ' + lng);
            })();
          </script>
        `;

        // Inject <base> tag and geoScript right after <head> or at the start
        if (data.includes('<head>')) {
          data = data.replace('<head>', `<head><base href="${baseUrl}/">${geoScript}`);
        } else {
          data = `<base href="${baseUrl}/">${geoScript}` + data;
        }
        
        // Also remove some common frame-busting scripts if possible
        data = data.replace(/if\s*\(top\s*!==\s*self\)\s*top\.location\s*=\s*self\.location;/g, '');
        data = data.replace(/if\s*\(parent\s*!==\s*self\)\s*parent\.location\s*=\s*self\.location;/g, '');
      }

      res.send(data);
    } catch (error: any) {
      console.error('Proxy error:', error.message);
      res.status(500).send(`Proxy error: ${error.message}`);
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`StealthView Server running on http://localhost:${PORT}`);
  });
}

startServer();
