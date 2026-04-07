import { Device, Location } from './types';

export const DEVICES: Device[] = [
  // Mobile
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
    id: 'iphone-14',
    name: 'iPhone 14',
    brand: 'Apple',
    width: 390,
    height: 844,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
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
    id: 's22',
    name: 'Galaxy S22',
    brand: 'Samsung',
    width: 360,
    height: 780,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 12; SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36'
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
    id: 'pixel-7',
    name: 'Pixel 7',
    brand: 'Google',
    width: 412,
    height: 915,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36'
  },
  {
    id: 'oneplus-11',
    name: 'OnePlus 11',
    brand: 'OnePlus',
    width: 412,
    height: 915,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; CPH2447) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36'
  },
  {
    id: 'xiaomi-13',
    name: 'Xiaomi 13 Pro',
    brand: 'Xiaomi',
    width: 393,
    height: 870,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; 2210132G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36'
  },
  {
    id: 'realme-10',
    name: 'Realme 10 Pro',
    brand: 'Realme',
    width: 393,
    height: 852,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; RMX3660) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36'
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    width: 440,
    height: 956,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
  },
  {
    id: 'pixel-9-pro-xl',
    name: 'Pixel 9 Pro XL',
    brand: 'Google',
    width: 412,
    height: 915,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 15; Pixel 9 Pro XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36'
  },
  {
    id: 'galaxy-z-fold-6',
    name: 'Galaxy Z Fold 6 (Unfolded)',
    brand: 'Samsung',
    width: 768,
    height: 946,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 14; SM-F956B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36'
  },
  {
    id: 'pixel-fold',
    name: 'Pixel Fold (Unfolded)',
    brand: 'Google',
    width: 892,
    height: 702,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel Fold) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36'
  },
  {
    id: 'nothing-phone-2',
    name: 'Nothing Phone (2)',
    brand: 'Nothing',
    width: 412,
    height: 915,
    type: 'mobile',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; A065) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36'
  },

  // Tablet
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
    id: 'ipad-air',
    name: 'iPad Air 5',
    brand: 'Apple',
    width: 820,
    height: 1180,
    type: 'tablet',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
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
    id: 'tab-s8',
    name: 'Galaxy Tab S8',
    brand: 'Samsung',
    width: 800,
    height: 1280,
    type: 'tablet',
    userAgent: 'Mozilla/5.0 (Linux; Android 12; SM-X700) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  {
    id: 'lenovo-tab-p12',
    name: 'Lenovo Tab P12 Pro',
    brand: 'Lenovo',
    width: 800,
    height: 1280,
    type: 'tablet',
    userAgent: 'Mozilla/5.0 (Linux; Android 11; Lenovo TB-Q706F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  {
    id: 'ipad-mini',
    name: 'iPad mini',
    brand: 'Apple',
    width: 744,
    height: 1133,
    type: 'tablet',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  },
  {
    id: 'surface-pro-9',
    name: 'Surface Pro 9',
    brand: 'Microsoft',
    width: 960,
    height: 1440,
    type: 'tablet',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  {
    id: 'pixel-tablet',
    name: 'Pixel Tablet',
    brand: 'Google',
    width: 1280,
    height: 800,
    type: 'tablet',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel Tablet) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },

  // Desktop
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
    id: 'macbook-air',
    name: 'MacBook Air M2',
    brand: 'Apple',
    width: 1440,
    height: 900,
    type: 'desktop',
    userAgent: 'Mozilla/5.0 (Macintosh; Arm Mac OS X 13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  {
    id: 'desktop-1080p',
    name: 'Desktop 1080p',
    brand: 'Generic',
    width: 1920,
    height: 1080,
    type: 'desktop',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  {
    id: 'desktop-1440p',
    name: 'Desktop 1440p',
    brand: 'Generic',
    width: 2560,
    height: 1440,
    type: 'desktop',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  {
    id: 'desktop-4k',
    name: 'Desktop 4K',
    brand: 'Generic',
    width: 3840,
    height: 2160,
    type: 'desktop',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  
  {
    id: 'ultrawide-monitor',
    name: 'Ultrawide 21:9',
    brand: 'Generic',
    width: 3440,
    height: 1440,
    type: 'desktop',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  {
    id: 'laptop-13-inch',
    name: 'Laptop (Small)',
    brand: 'Generic',
    width: 1280,
    height: 800,
    type: 'desktop',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  },
  {
    id: 'surface-laptop-5',
    name: 'Surface Laptop 5',
    brand: 'Microsoft',
    width: 1128,
    height: 752,
    type: 'desktop',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
  }
];

export const LOCATIONS: Location[] = [
  { name: 'United States (New York)', lat: 40.7128, lng: -74.0060 },
  { name: 'United States (Los Angeles)', lat: 34.0522, lng: -118.2437 },
  { name: 'United States (Chicago)', lat: 41.8781, lng: -87.6298 },
  { name: 'United Kingdom (London)', lat: 51.5074, lng: -0.1278 },
  { name: 'United Kingdom (Manchester)', lat: 53.4808, lng: -2.2426 },
  { name: 'Japan (Tokyo)', lat: 35.6762, lng: 139.6503 },
  { name: 'Japan (Osaka)', lat: 34.6937, lng: 135.5023 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Germany (Berlin)', lat: 52.5200, lng: 13.4050 },
  { name: 'Germany (Frankfurt)', lat: 50.1109, lng: 8.6821 },
  { name: 'France (Paris)', lat: 48.8566, lng: 2.3522 },
  { name: 'France (Lyon)', lat: 45.7640, lng: 4.8357 },
  { name: 'Australia (Sydney)', lat: -33.8688, lng: 151.2093 },
  { name: 'Australia (Melbourne)', lat: -37.8136, lng: 144.9631 },
  { name: 'India (Mumbai)', lat: 19.0760, lng: 72.8777 },
  { name: 'India (Delhi)', lat: 28.7041, lng: 77.1025 },
  { name: 'India (Bangalore)', lat: 12.9716, lng: 77.5946 },
  { name: 'Brazil (São Paulo)', lat: -23.5505, lng: -46.6333 },
  { name: 'Brazil (Rio de Janeiro)', lat: -22.9068, lng: -43.1729 },
  { name: 'Canada (Toronto)', lat: 43.6511, lng: -79.3470 },
  { name: 'Canada (Vancouver)', lat: 49.2827, lng: -123.1207 },
  { name: 'South Africa (Cape Town)', lat: -33.9249, lng: 18.4241 },
  { name: 'South Africa (Johannesburg)', lat: -26.2041, lng: 28.0473 },
  { name: 'China (Shanghai)', lat: 31.2304, lng: 121.4737 },
  { name: 'China (Beijing)', lat: 39.9042, lng: 116.4074 },
  { name: 'Russia (Moscow)', lat: 55.7558, lng: 37.6173 },
  { name: 'Russia (Saint Petersburg)', lat: 59.9343, lng: 30.3351 },
  { name: 'South Korea (Seoul)', lat: 37.5665, lng: 126.9780 },
  { name: 'South Korea (Busan)', lat: 35.1796, lng: 129.0756 },
  { name: 'Mexico (Mexico City)', lat: 19.4326, lng: -99.1332 },
  { name: 'Mexico (Guadalajara)', lat: 20.6597, lng: -103.3496 },
  { name: 'Indonesia (Jakarta)', lat: -6.2088, lng: 106.8456 },
  { name: 'Indonesia (Bali)', lat: -8.4095, lng: 115.1889 },
  { name: 'Nigeria (Lagos)', lat: 6.5244, lng: 3.3792 },
  { name: 'Nigeria (Abuja)', lat: 9.0579, lng: 7.4951 },
  { name: 'Egypt (Cairo)', lat: 30.0444, lng: 31.2357 },
  { name: 'Egypt (Alexandria)', lat: 31.2001, lng: 29.9187 },
  { name: 'Turkey (Istanbul)', lat: 41.0082, lng: 28.9784 },
  { name: 'Turkey (Ankara)', lat: 39.9334, lng: 32.8597 },
  { name: 'Argentina (Buenos Aires)', lat: -34.6037, lng: -58.3816 },
  { name: 'Argentina (Córdoba)', lat: -31.4201, lng: -64.1888 },
  { name: 'Saudi Arabia (Riyadh)', lat: 24.7136, lng: 46.6753 },
  { name: 'Saudi Arabia (Jeddah)', lat: 21.5433, lng: 39.1728 },
  { name: 'Thailand (Bangkok)', lat: 13.7563, lng: 100.5018 },
  { name: 'Thailand (Chiang Mai)', lat: 18.7883, lng: 98.9853 },
  { name: 'Vietnam (Hanoi)', lat: 21.0278, lng: 105.8342 },
  { name: 'Vietnam (Ho Chi Minh City)', lat: 10.8231, lng: 106.6297 },
  { name: 'Philippines (Manila)', lat: 14.5995, lng: 120.9842 },
  { name: 'Philippines (Cebu)', lat: 10.3157, lng: 123.8854 },
  { name: 'Malaysia (Kuala Lumpur)', lat: 3.1390, lng: 101.6869 },
  { name: 'Malaysia (Penang)', lat: 5.4164, lng: 100.3328 },
  { name: 'New Zealand (Auckland)', lat: -36.8485, lng: 174.7633 },
  { name: 'New Zealand (Wellington)', lat: -41.2865, lng: 174.7762 }
];
