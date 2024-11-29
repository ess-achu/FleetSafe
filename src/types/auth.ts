export interface User {
  id: string;
  email: string;
  agencyName: string;
  createdAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  agencyName: string;
  confirmPassword: string;
}