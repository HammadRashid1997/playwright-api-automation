import { APIRequestContext } from '@playwright/test';

export class UserApi {
  constructor(private request: APIRequestContext) {}

  async getAllUsers() {
    return this.request.get(`/users`);
  }

  async getUser(id: number) {
    return this.request.get(`/users/${id}`);
  }

  async createUser(userData: any) {
    return this.request.post('/users', { data: userData });
  }
}