export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  licenseExpiry: Date;
  status: 'active' | 'inactive';
}

export interface Vehicle {
  id: string;
  registrationNumber: string;
  type: string;
  model: string;
  year: number;
  status: 'active' | 'maintenance' | 'inactive';
  assignedDriverId?: string;
}

export interface Document {
  id: string;
  type: 'permit' | 'insurance' | 'license' | 'other';
  title: string;
  number: string;
  expiryDate: Date;
  fileUrl: string;
  entityId: string; // Can be either vehicle ID or driver ID
  entityType: 'vehicle' | 'driver';
}