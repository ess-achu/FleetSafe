import { LoginCredentials, User } from '../types/auth';

const TEST_USER: User = {
  id: 'test-user',
  email: 'test@example.com',
  agencyName: 'Test Agency',
  createdAt: new Date(),
};

export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (credentials.email === 'test' && credentials.password === '123') {
    return TEST_USER;
  }

  throw new Error('Invalid credentials');
};