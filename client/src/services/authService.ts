/**
 * Authentication service
 */

import api from './api';
import { ENDPOINTS, TOKEN_KEY, USER_KEY } from '../utils/constants';
import type { AuthCredentials, RegisterData, AuthResponse, User } from '../types/auth';
import { db } from '../database/indexedDB';

export const authService = {
  /**
   * Login user
   */
  async login(credentials: AuthCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>(ENDPOINTS.LOGIN, credentials);
      const { token, user } = response.data;

      // Store token and user
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Register new user
   */
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const { confirmPassword, ...registerData } = data;
      const response = await api.post<AuthResponse>(ENDPOINTS.REGISTER, registerData);
      const { token, user } = response.data;

      // Store token and user
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      await api.post(ENDPOINTS.LOGOUT);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem('telehealth_refresh_token');
      // Clear IndexedDB
      await db.clear('patients');
      await db.clear('appointments');
      await db.clear('medicalRecords');
      await db.clear('prescriptions');
    }
  },

  /**
   * Get current user
   */
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  /**
   * Get auth token
   */
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
};
