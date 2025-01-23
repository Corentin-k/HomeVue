import { v4 as uuidv4 } from 'uuid';

export type UserRole = 'admin' | 'user';

export interface User {
  username: string;
  password: string;
  role: UserRole;
  color: string;
  token?: string;
}

const users: User[] = [
  { username: 'admin', password: 'admin', role: 'admin', color: '#bb86fc', token: uuidv4() },
  { username: 'user', password: 'user', role: 'user', color: '#bb86fc', token: uuidv4() },
];

export function authenticate(username: string, password: string): User | null {
 
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const loggedInUserJSON = localStorage.getItem('loggedInUser');
    const loggedInUser = loggedInUserJSON ? JSON.parse(loggedInUserJSON) as User : null;
    if (loggedInUserJSON && loggedInUser && loggedInUser.username === user.username) {
      const loggedInUser = JSON.parse(loggedInUserJSON);
      loggedInUser.token = uuidv4();
      console.log('User already logged in:', loggedInUser);
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      
      return loggedInUser;
    }
    user.token = uuidv4();
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    return user;
  }
  return null;
}

export function logoutUser(): void {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    const user = JSON.parse(loggedInUser) as User;
    delete user.token;
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }
}

export function getUserByToken(token: string): User | null {
  return users.find(u => u.token === token) || null;
}

// Dans services/usersService.js (ou équivalent)
import axios from 'axios';

export const updateUserColor = async (username:any, color:any) => {
  try {
    await axios.patch('http://localhost:3000/api/auth/update-color', { username, color });
  } catch (error) {
    console.error('Failed to update color:', error);
    throw new Error('Failed to update color');
  }
};

export function getUserColor(username: string): string {
  const user = users.find(u => u.username === username);
  return user ? user.color : '#bb86fc';
}

