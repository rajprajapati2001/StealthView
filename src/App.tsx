/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  Globe, 
  Zap
} from 'lucide-react';
import { useLocalStorage } from 'react-use';
import { DEVICES, LOCATIONS } from './constants';
import { Device, Location } from './types';

// Components
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Browser } from './components/Browser';
import { AboutPopup } from './components/AboutPopup';
import { StealthLogo } from './components/StealthLogo';

export default function App() {
  const [url, setUrl] = useLocalStorage('stealth-url', '');
  const [displayUrl, setDisplayUrl] = useState('');
  const [activeDevice, setActiveDevice] = useLocalStorage<Device>('stealth-device', DEVICES[3]);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');
  const [zoom, setZoom] = useState(0.8);
  const [location, setLocation] = useLocalStorage<Location>('stealth-location', LOCATIONS[0]);
  const [latInput, setLatInput] = useState(LOCATIONS[0].lat.toString());
  const [lngInput, setLngInput] = useState(LOCATIONS[0].lng.toString());
  const [ipAddress, setIpAddress] = useLocalStorage('stealth-ip', '192.168.1.1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWarningMinimized, setIsWarningMinimized] = useState(false);
  const [isProxyEnabled, setIsProxyEnabled] = useLocalStorage('stealth-proxy', false);
  const [speed, setSpeed] = useState('0.0');

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (displayUrl) {
      setIsWarningMinimized(false);
      const timer = setTimeout(() => {
        setIsWarningMinimized(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [displayUrl]);

  const generateRandomIP = () => {
    const ip = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
    setIpAddress(ip);
  };

  useEffect(() => {
    if (!ipAddress) generateRandomIP();
    
    const interval = setInterval(() => {
      setSpeed((Math.random() * 100 + 50).toFixed(1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location) {
      setLatInput(location.lat.toString());
      setLngInput(location.lng.toString());
    }
  }, [location]);

  const handleBrowse = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    const newLat = parseFloat(latInput);
    const newLng = parseFloat(lngInput);
    if (!isNaN(newLat) && !isNaN(newLng)) {
      // Only set to "Custom Location" if it's actually different from the current preset
      if (newLat !== location?.lat || newLng !== location?.lng) {
        setLocation({ name: 'Custom Location', lat: newLat, lng: newLng });
      }
    }

    if (!url) return;
    
    let formattedUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      formattedUrl = `https://${url}`;
    }
    
    setIsLoading(true);
    setDisplayUrl(formattedUrl);
  };

  const handleReset = () => {
    setUrl('');
    setDisplayUrl('');
    setIsLoading(false);
  };

  const toggleOrientation = () => {
    setOrientation(prev => prev === 'portrait' ? 'landscape' : 'portrait');
  };

  const getDimensions = () => {
    if (!activeDevice) return { width: 1920, height: 1080 };
    if (orientation === 'landscape' && activeDevice.type !== 'desktop') {
      return { width: activeDevice.height, height: activeDevice.width };
    }
    return { width: activeDevice.width, height: activeDevice.height };
  };

  const { width, height } = getDimensions();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-zinc-950 font-sans text-zinc-100">
      {/* Main Content Area */}
      <main className="relative flex flex-1 flex-col overflow-hidden">
        <Navbar 
          url={url || ''}
          setUrl={setUrl}
          handleBrowse={handleBrowse}
          handleReset={handleReset}
          setIsAboutOpen={setIsAboutOpen}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <Browser 
          displayUrl={displayUrl}
          isLoading={isLoading}
          activeDevice={activeDevice!}
          width={width}
          height={height}
          zoom={zoom}
          setZoom={setZoom}
          orientation={orientation}
          toggleOrientation={toggleOrientation}
          isWarningMinimized={isWarningMinimized}
          isProxyEnabled={isProxyEnabled || false}
          location={location!}
          ipAddress={ipAddress || ''}
          setIsLoading={setIsLoading}
          iframeRef={iframeRef}
          setUrl={setUrl}
          setDisplayUrl={setDisplayUrl}
        />

        {/* Footer Info */}
        <footer className="glass-panel flex items-center justify-between px-6 py-2 text-[10px] text-zinc-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <span>VPN Active: {location?.name}</span>
            </div>
            <div className="flex items-center gap-1.5 border-l border-zinc-800 pl-4">
              <Globe className="h-3 w-3 text-zinc-500" />
              <span>IP: {ipAddress}</span>
            </div>
            <div className="flex items-center gap-1.5 border-l border-zinc-800 pl-4">
              <Zap className="h-3 w-3 text-amber-500" />
              <span>{speed} Mbps</span>
            </div>
            <div className="flex items-center gap-1.5 border-l border-zinc-800 pl-4">
              <StealthLogo className="h-3 w-3" />
              <span>Encrypted Session</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>Lat: {location?.lat.toFixed(4)}</span>
            <span>Lng: {location?.lng.toFixed(4)}</span>
          </div>
        </footer>
      </main>

      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeDevice={activeDevice!}
        setActiveDevice={setActiveDevice}
        orientation={orientation}
        setOrientation={setOrientation}
        location={location!}
        setLocation={setLocation}
        latInput={latInput}
        setLatInput={setLatInput}
        lngInput={lngInput}
        setLngInput={setLngInput}
        ipAddress={ipAddress || ''}
        generateRandomIP={generateRandomIP}
        handleBrowse={handleBrowse}
        setZoom={setZoom}
        isProxyEnabled={isProxyEnabled || false}
        setIsProxyEnabled={setIsProxyEnabled}
      />

      <AboutPopup 
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
