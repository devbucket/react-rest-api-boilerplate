import type { AxiosInstance } from 'axios'
import axios from 'axios'

export class ApiClient {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      // TODO: add headers (auth, etc.)
    });
  }
}
