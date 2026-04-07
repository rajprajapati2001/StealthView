import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Minimize2, Maximize2, Info, ExternalLink } from 'lucide-react';
import { Device, Location } from '../types';
import { StealthLogo } from './StealthLogo';

interface BrowserProps {
  displayUrl: string;
  isLoading: boolean;
  activeDevice: Device;
  width: number;
  height: number;
  zoom: number;
  setZoom: (zoom: number) => void;
  orientation: 'portrait' | 'landscape';
  toggleOrientation: () => void;
  isWarningMinimized: boolean;
  isProxyEnabled: boolean;
  location: Location;
  ipAddress: string;
  setIsLoading: (loading: boolean) => void;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  setUrl: (url: string) => void;
  setDisplayUrl: (url: string) => void;
}

export const Browser: React.FC<BrowserProps> = ({
  displayUrl,
  isLoading,
  activeDevice,
  width,
  height,
  zoom,
  setZoom,
  orientation,
  toggleOrientation,
  isWarningMinimized,
  isProxyEnabled,
  location,
  ipAddress,
  setIsLoading,
  iframeRef,
  setUrl,
  setDisplayUrl
}) => {
  const getIframeSrc = () => {
    if (!displayUrl) return '';
    if (isProxyEnabled) {
      const params = new URLSearchParams({
        url: displayUrl,
        lat: location.lat.toString(),
        lng: location.lng.toString(),
        ip: ipAddress
      });
      return `/api/proxy?${params.toString()}`;
    }
    return displayUrl;
  };

  return (
    <div className="relative flex-1 overflow-auto bg-zinc-900/30 p-8 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!displayUrl ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-md text-center"
          >
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/10">
              <StealthLogo className="h-10 w-10" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-white">Private Browser Emulator</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Enter a URL above to start browsing. Your session is isolated, and you can emulate various devices and locations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {['google.com', 'wikipedia.org', 'github.com'].map(site => (
                <button
                  key={site}
                  onClick={() => { setUrl(site); setDisplayUrl(`https://${site}`); }}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-xs font-medium text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 transition-all"
                >
                  {site}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex flex-col items-center"
            style={{ transform: `scale(${zoom})` }}
          >
            {/* Device Frame Header */}
            <div className="mb-4 flex w-full items-center justify-between px-2 text-zinc-500">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="rounded bg-zinc-800 px-2 py-0.5 text-indigo-400">{activeDevice.name}</span>
                <span>{width} × {height}</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={toggleOrientation} className="hover:text-white transition-colors" title="Rotate Device">
                  <RotateCcw className={`h-4 w-4 transition-transform ${orientation === 'landscape' ? 'rotate-90' : ''}`} />
                </button>
                <div className="flex items-center gap-1">
                  <button onClick={() => setZoom(Math.max(0.2, zoom - 0.1))} className="hover:text-white"><Minimize2 className="h-4 w-4"/></button>
                  <span className="text-[10px] w-8 text-center">{Math.round(zoom * 100)}%</span>
                  <button onClick={() => setZoom(Math.min(2, zoom + 0.1))} className="hover:text-white"><Maximize2 className="h-4 w-4"/></button>
                </div>
              </div>
            </div>

            {/* The Iframe Container */}
            <div 
              className="browser-shadow relative overflow-hidden rounded-xl border border-zinc-800 bg-white"
              style={{ 
                width: `${width}px`, 
                height: `${height}px`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
                    <p className="text-sm font-medium text-zinc-300">Establishing Secure Connection...</p>
                  </div>
                </div>
              )}
              
              {/* Warning for CORS/Frame restrictions */}
              <motion.div 
                layout
                initial={false}
                animate={{ 
                  width: isWarningMinimized ? 40 : 240,
                  height: isWarningMinimized ? 40 : 'auto',
                }}
                whileHover={{ 
                  width: 240,
                  height: 'auto',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute bottom-4 right-4 z-10 overflow-hidden bg-amber-500/20 border border-amber-500/30 text-amber-200 backdrop-blur-md shadow-xl cursor-help group rounded-xl"
              >
                <div className="p-3 w-[240px]">
                  <div className="flex items-start gap-3">
                    <Info className="h-4 w-4 shrink-0 mt-0.5" />
                    <motion.div 
                      initial={false}
                      animate={{ opacity: isWarningMinimized ? 0 : 1 }}
                      whileHover={{ opacity: 1 }}
                      className="flex-1"
                    >
                      <p className="text-[10px] leading-tight mb-2">
                        {isProxyEnabled 
                          ? "Stealth Proxy active. This helps bypass security restrictions, but some dynamic features may be limited."
                          : "Note: Some websites block iframe embedding. If the page is blank, try enabling 'Stealth Proxy' in settings."}
                      </p>
                      <button
                        onClick={() => window.open(displayUrl, '_blank')}
                        className="flex items-center gap-1.5 rounded bg-amber-500/20 px-2 py-1 text-[9px] font-bold hover:bg-amber-500/40 transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Open in New Tab
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <iframe
                key={isProxyEnabled ? 'proxy' : 'direct'}
                ref={iframeRef}
                src={getIframeSrc()}
                className="h-full w-full border-none"
                onLoad={() => setIsLoading(false)}
                title="Browser Viewport"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
