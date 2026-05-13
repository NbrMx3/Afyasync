/**
 * Axios API service configuration
 */

import axios from 'axios';
import type { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL, TOKEN_KEY, ENDPOINTS } from '../utils/constants';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor - add token to requests
 */
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor - handle responses and errors
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle token expiration
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh token
        const refreshToken = localStorage.getItem('telehealth_refresh_token');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}${ENDPOINTS.REFRESH_TOKEN}`, {
            refreshToken,
          });

          localStorage.setItem(TOKEN_KEY, response.data.token);
          if (response.data.refreshToken) {
            localStorage.setItem('telehealth_refresh_token', response.data.refreshToken);
          }

          // Retry original request
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Redirect to login on refresh failure
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem('telehealth_refresh_token');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;
