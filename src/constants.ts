import { Device, Location } from './types';

export const DEVICES: Device[] = [
  { 
    id: 'iphone-15', 
    name: 'iPhone 15 Pro', 
    brand: 'Apple', 
    width: 393, 
    height: 852, 
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  },
  { 
    id: 's23-ultra', 
    name: 'Galaxy S23 Ultra', 
    brand: 'Samsung', 
    width: 384, 
    height: 854, 
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36'
  },
  { 
    id: 'pixel-8', 
    name: 'Pixel 8 Pro', 
    brand: 'Google', 
    width: 412, 
    height: 892, 
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36'
  },
  { 
    id: 'ipad-pro', 
    name: 'iPad Pro 12.9', 
    brand: 'Apple', 
    width: 1024, 
    height: 1366, 
    type: 'tablet',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  },
  { 
    id: 'tab-s9', 
    name: 'Galaxy Tab S9', 
    brand: 'Samsung', 
    width: 800, 
    height: 1280, 
    type: 'tablet',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; SM-X710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  { 
    id: 'macbook-pro', 
    name: 'MacBook Pro 16', 
    brand: 'Apple', 
    width: 1536, 
    height: 960, 
    type: 'desktop',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  { 
    id: 'desktop-1080p', 
    name: 'Desktop 1080p', 
    brand: 'Generic', 
    width: 1920, 
    height: 1080, 
    type: 'desktop',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  }
];

export const LOCATIONS: Location[] = [
  { name: 'United States (New York)', lat: 40.7128, lng: -74.0060 },
  { name: 'United Kingdom (London)', lat: 51.5074, lng: -0.1278 },
  { name: 'Japan (Tokyo)', lat: 35.6762, lng: 139.6503 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Germany (Frankfurt)', lat: 50.1109, lng: 8.6821 },
  { name: 'France (Paris)', lat: 48.8566, lng: 2.3522 },
  { name: 'Australia (Sydney)', lat: -33.8688, lng: 151.2093 },
  { name: 'India (Mumbai)', lat: 19.0760, lng: 72.8777 }
];
