import { APIRequestContext } from '@playwright/test';

export class PostApi {

  constructor(private request: APIRequestContext) {}

  async createPost(postData: object) {
    return await this.request.post('/posts', {
      data: postData
    });
  }

  async getAllPosts() {
    return await this.request.get('/posts');
  }

  async getPost(postId: number) {
    return await this.request.get(`/posts/${postId}`);
  }
}