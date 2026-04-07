export interface Device {
  id: string;
  name: string;
  brand: string;
  width: number;
  height: number;
  type: 'mobile' | 'tablet' | 'desktop';
  userAgent: string;
}

export interface Location {
  name: string;
  lat: number;
  lng: number;
}
