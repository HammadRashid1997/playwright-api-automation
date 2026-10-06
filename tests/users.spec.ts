import { test, expect } from '@playwright/test';
import { UserApi } from '../api/users.api';
import { userData, userMultipleData } from '../test-data/users.data';

test('Get the complete list of users', async ({ request }) => {
  const userApi = new UserApi(request);
  const response = await userApi.getAllUsers();
  expect(response.status()).toBe(200);
});

test('Get the details of a specific user', async ({ request }) => {
  const userApi = new UserApi(request);
  const userId = 1;
  const response = await userApi.getUser(userId);
  expect(response.status()).toBe(200);
});

test('Create a new user', async ({ request }) => {
  const userApi = new UserApi(request);
  const response = await userApi.createUser(userData);
  expect(response.status()).toBe(201);
});

test('Create multiple users', async ({ request }) => {
  const userApi = new UserApi(request);
  const response = await userApi.createUser(userMultipleData);
  expect(response.status()).toBe(201);
});

test('Get a user that does not exist', async ({ request }) => {
  const userApi = new UserApi(request);
  const userId = 999999999;
  const response = await userApi.getUser(userId);
  expect(response.status()).toBe(404);
});