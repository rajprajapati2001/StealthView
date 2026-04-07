import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings2, 
  X, 
  RotateCcw, 
  Shield, 
  Smartphone, 
  Tablet, 
  Monitor, 
  MapPin,
  ChevronDown
} from 'lucide-react';
import { Device, Location } from '../types';
import { DEVICES, LOCATIONS } from '../constants';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  activeDevice: Device;
  setActiveDevice: (device: Device) => void;
  orientation: 'portrait' | 'landscape';
  setOrientation: (orientation: 'portrait' | 'landscape') => void;
  location: Location;
  setLocation: (location: Location) => void;
  latInput: string;
  setLatInput: (lat: string) => void;
  lngInput: string;
  setLngInput: (lng: string) => void;
  ipAddress: string;
  generateRandomIP: () => void;
  handleBrowse: (e?: React.FormEvent) => void;
  setZoom: (zoom: number) => void;
  isProxyEnabled: boolean;
  setIsProxyEnabled: (enabled: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  activeDevice,
  setActiveDevice,
  orientation,
  setOrientation,
  location,
  setLocation,
  latInput,
  setLatInput,
  lngInput,
  setLngInput,
  ipAddress,
  generateRandomIP,
  handleBrowse,
  setZoom,
  isProxyEnabled,
  setIsProxyEnabled
}) => {
  const [isDeviceDropdownOpen, setIsDeviceDropdownOpen] = useState(false);

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <Smartphone className="h-4 w-4" />;
      case 'tablet': return <Tablet className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.aside
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="glass-panel z-30 w-80 flex flex-col border-l border-zinc-800"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 p-4">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <Settings2 className="h-4 w-4 text-indigo-400" />
              Device Emulator
            </h3>
            <button onClick={() => setIsSidebarOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
            {/* Stealth Profile */}
            <section className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Stealth Profile</label>
              <div className="rounded-lg bg-indigo-500/5 p-3 border border-indigo-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-zinc-400">Stealth Proxy</span>
                    <p className="text-[9px] text-zinc-500">Bypass iframe restrictions</p>
                  </div>
                  <button
                    onClick={() => setIsProxyEnabled(!isProxyEnabled)}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${
                      isProxyEnabled ? 'bg-indigo-600' : 'bg-zinc-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                        isProxyEnabled ? 'translate-x-5' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500">Virtual IP Address</span>
                    <button 
                      onClick={generateRandomIP}
                      className="text-[10px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                    >
                      <RotateCcw className="h-2.5 w-2.5" />
                      Rotate
                    </button>
                  </div>
                  <div className="font-mono text-xs text-indigo-300 bg-zinc-950/50 rounded px-2 py-1 border border-zinc-800 flex items-center justify-between">
                    {ipAddress}
                    <Shield className="h-3 w-3 text-indigo-500/50" />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-500">Active User Agent</span>
                  <div className="text-[9px] leading-tight text-zinc-400 font-mono bg-zinc-950/50 rounded p-2 border border-zinc-800 break-all">
                    {activeDevice.userAgent}
                  </div>
                </div>
              </div>
            </section>

            {/* Product Selection */}
            <section className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Device Configuration</label>
              
              <div className="space-y-2">
                <p className="text-xs text-zinc-400">Select Model</p>
                <div className="relative">
                  <button
                    onClick={() => setIsDeviceDropdownOpen(!isDeviceDropdownOpen)}
                    className="flex w-full items-center justify-between rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-xs text-zinc-200 hover:border-zinc-700 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      {getDeviceIcon(activeDevice.type)}
                      <span>{activeDevice.brand} {activeDevice.name}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isDeviceDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDeviceDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 right-0 top-full z-40 mt-1 max-h-60 overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-900 p-1 shadow-2xl no-scrollbar"
                      >
                        {DEVICES.map((device) => (
                          <button
                            key={device.id}
                            onClick={() => {
                              setActiveDevice(device);
                              setIsDeviceDropdownOpen(false);
                            }}
                            className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors ${
                              activeDevice.id === device.id 
                                ? 'bg-indigo-500/10 text-indigo-400' 
                                : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                            }`}
                          >
                            {getDeviceIcon(device.type)}
                            <span>{device.brand} {device.name}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-zinc-400">View Mode</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'portrait', label: 'Portable', icon: Smartphone },
                    { id: 'landscape', label: 'Landscape', icon: Tablet },
                    { id: 'normal', label: 'Normal', icon: Monitor },
                    { id: 'desktop', label: 'Desktop', icon: Monitor },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => {
                        if (mode.id === 'portrait' || mode.id === 'landscape') {
                          setOrientation(mode.id as any);
                        }
                      }}
                      className={`flex items-center gap-2 rounded-lg border p-2 text-[10px] transition-all ${
                        (mode.id === orientation || (mode.id === 'desktop' && activeDevice.type === 'desktop'))
                          ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400'
                          : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700'
                      }`}
                    >
                      <mode.icon className="h-3 w-3" />
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Shortcuts */}
            <section className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Shortcuts</label>
              <div className="grid grid-cols-3 gap-2">
                {DEVICES.slice(0, 6).map(device => (
                  <button
                    key={device.id}
                    onClick={() => setActiveDevice(device)}
                    className={`flex flex-col items-center justify-center gap-1 rounded-lg border p-2 transition-all ${
                      activeDevice.id === device.id
                        ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400'
                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700'
                    }`}
                  >
                    {getDeviceIcon(device.type)}
                    <span className="text-[8px] text-center truncate w-full">{device.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Location Simulation */}
            <section className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">VPN Location</label>
              <div className="space-y-2">
                <div className="relative">
                  <MapPin className="absolute left-2 top-2.5 h-3 w-3 text-zinc-500" />
                  <select 
                    className="w-full rounded-lg bg-zinc-900 border border-zinc-800 py-2 pl-7 pr-2 text-xs text-zinc-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={location.name}
                    onChange={(e) => {
                      const loc = LOCATIONS.find(l => l.name === e.target.value);
                      if (loc) {
                        setLocation(loc);
                        setLatInput(loc.lat.toString());
                        setLngInput(loc.lng.toString());
                      }
                    }}
                  >
                    {LOCATIONS.map(loc => (
                      <option key={loc.name} value={loc.name}>{loc.name}</option>
                    ))}
                  </select>
                </div>
                <div className="rounded-lg bg-zinc-900/50 p-3 border border-zinc-800 space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-zinc-500">Latitude</label>
                    <input 
                      type="text"
                      value={latInput}
                      onChange={(e) => setLatInput(e.target.value)}
                      className="w-full rounded bg-zinc-800 border border-zinc-700 px-2 py-1 text-[10px] text-zinc-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-zinc-500">Longitude</label>
                    <input 
                      type="text"
                      value={lngInput}
                      onChange={(e) => setLngInput(e.target.value)}
                      className="w-full rounded bg-zinc-800 border border-zinc-700 px-2 py-1 text-[10px] text-zinc-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="pt-4 flex gap-2">
              <button 
                onClick={() => handleBrowse()}
                className="flex-1 rounded-lg bg-gradient-primary py-2 text-xs font-bold text-white hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20"
              >
                Apply Changes
              </button>
              <button 
                onClick={() => {
                  setActiveDevice(DEVICES[3]);
                  setOrientation('landscape');
                  setLocation(LOCATIONS[0]);
                  setLatInput(LOCATIONS[0].lat.toString());
                  setLngInput(LOCATIONS[0].lng.toString());
                  setZoom(0.8);
                }}
                className="rounded-lg bg-zinc-800 px-3 py-2 text-xs font-bold text-zinc-300 hover:bg-zinc-700 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Bottom Status */}
          <div className="border-t border-zinc-800 p-4 bg-zinc-900/20">
            <div className="flex items-center gap-3 text-[10px] text-zinc-500">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span>Secure Tunnel Established</span>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
