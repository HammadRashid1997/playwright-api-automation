import { test, expect } from '@playwright/test';
import { CommentApi } from '../api/comments.api';
import { commentData, commentMultipleData } from '../test-data/comments.data';

test('Get the complete list of comments', async ({ request }) => {
  const commentApi = new CommentApi(request);
  const response = await commentApi.getAllComments();
  expect(response.status()).toBe(200);
});

test('Get the details of a specific comment', async ({ request }) => {
  const commentApi = new CommentApi(request);
  const commentId = 1;
  const response = await commentApi.getComment(commentId);
  expect(response.status()).toBe(200);
});

test('Create a new comment', async ({ request }) => {
  const commentApi = new CommentApi(request);
  const response = await commentApi.createComment(commentData);
  expect(response.status()).toBe(201);
});

test('Create multiple comments', async ({ request }) => {
  const commentApi = new CommentApi(request);
  const response = await commentApi.createComment(commentMultipleData);
  expect(response.status()).toBe(201);
});

test('Get a comment that does not exist', async ({ request }) => {
  const commentApi = new CommentApi(request);
  const commentId = 999999999;
  const response = await commentApi.getComment(commentId);
  expect(response.status()).toBe(404);
});

test('Update a comment', async ({ request }) => {
  const commentApi = new CommentApi(request);
  const commentId = 10;
  const updatedCommentData = { title: 'Updated Title', body: 'Updated Body' };
  const response = await commentApi.updateComment(commentId, updatedCommentData);
  expect(response.status()).toBe(200);
});

test('Delete a comment', async ({ request }) => {
  const commentApi = new CommentApi(request);
  const commentId = 10;
  const response = await commentApi.deleteComment(commentId);
  expect(response.status()).toBe(200);
});