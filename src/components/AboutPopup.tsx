import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info } from 'lucide-react';
import { StealthLogo } from './StealthLogo';

interface AboutPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutPopup: React.FC<AboutPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 text-zinc-500 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                <StealthLogo className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">About StealthView</h2>
                <p className="text-xs text-zinc-500">Version 1.0.0 • Private Browser Emulator</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                StealthView is a professional-grade web browsing emulator designed for developers, security researchers, and privacy enthusiasts. It allows you to simulate various device environments and network conditions in a secure, isolated session.
              </p>
              
              <div className="rounded-lg bg-amber-500/5 p-4 border border-amber-500/20">
                <div className="mb-2 flex items-center gap-2 text-amber-500 font-semibold">
                  <Info className="h-4 w-4" />
                  <span>Important Disclaimer</span>
                </div>
                <p className="text-xs text-amber-200/80">
                  This tool is provided strictly for <span className="font-bold text-amber-200 underline">educational and professional testing purposes</span>. Users are responsible for complying with all applicable laws and terms of service of the websites they visit. Do not attempt to misuse this tool for unauthorized access or malicious activities.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Core Features</h4>
                  <ul className="list-inside list-disc text-[11px] space-y-1">
                    <li>Device Spoofing (UA & Resolution)</li>
                    <li>Geo-Location Simulation</li>
                    <li>Virtual IP Rotation</li>
                    <li>Encrypted Session Tunneling</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Security</h4>
                  <ul className="list-inside list-disc text-[11px] space-y-1">
                    <li>Isolated Iframe Sandbox</li>
                    <li>No Persistent Cookies</li>
                    <li>Encrypted Data Transmission</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-8 w-full rounded-xl bg-gradient-primary py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-all"
            >
              I Understand
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
