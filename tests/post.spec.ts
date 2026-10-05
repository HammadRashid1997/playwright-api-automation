import { test, expect } from '@playwright/test';
import { PostApi } from '../api/post.api';
import { postData, postMultipleData } from '../test-data/post.data';

test('Get the complete list of posts', async ({ request }) => {

  const postApi = new PostApi(request);

  const response = await postApi.getAllPosts();

  expect(response.status()).toBe(200);
});

test('Get the details of a specific post', async ({ request }) => {

  const postApi = new PostApi(request);

  const postId = 1;

  const response = await postApi.getPost(postId);

  expect(response.status()).toBe(200);
});

test('Create a new post', async ({ request }) => {

  const postApi = new PostApi(request);

  const response = await postApi.createPost(postData);

  expect(response.status()).toBe(201);
});

test('Create multiple posts', async ({ request }) => {
    
  const postApi = new PostApi(request);
  const response = await postApi.createPost(postMultipleData);
  expect(response.status()).toBe(201);
});
