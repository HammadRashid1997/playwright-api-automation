import { test, expect } from '@playwright/test';
import { PhotoApi } from '../api/photos.api';
import { photoData, photoMultipleData } from '../test-data/photos.data';

test('Get the complete list of photos', async ({ request }) => {
  const photoAPI = new PhotoApi(request);
  const response = await photoAPI.getAllPhotos();
  console.log('Status:', response.status());

  const data = await response.json();

  console.log('Response Data:', data);
  expect(response.status()).toBe(200);
});

test('Get the details of a specific photo', async ({ request }) => {
  const photoAPI = new PhotoApi(request);

  const photoId = 1;

  const response = await photoAPI.getPhoto(photoId);

  console.log('Status:', response.status());

  const data = await response.json();

  console.log('Response Data:', data);

  expect(response.status()).toBe(200);
});

test('Create a new photo', async ({ request }) => {
  const photoAPI = new PhotoApi(request);

  const response = await photoAPI.createPhoto(photoData);

  console.log('Status:', response.status());

  const data = await response.json();

  console.log('Created Data:', data);

  expect(response.status()).toBe(201);
});

test('Create multiple photos', async ({ request }) => {
  const photoAPI = new PhotoApi(request);

  const response = await photoAPI.createPhoto(photoMultipleData);

  console.log('Status:', response.status());

  const data = await response.json();

  console.log('Created Data:', data);

  expect(response.status()).toBe(201);
});