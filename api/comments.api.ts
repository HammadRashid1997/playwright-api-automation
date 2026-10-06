import { APIRequestContext } from '@playwright/test';

export class CommentApi {

  constructor(private request: APIRequestContext) {}

  async createComment(commentData: object) {
    return await this.request.post('/comments', {
      data: commentData
    });
  }

  async createInvlalidComment(invalidCommentData: object) {
    return await this.request.post('/comments', {
      data: invalidCommentData
    });
  }

  async getAllComments() {
    return await this.request.get('/comments');
  }

  async getComment(commentId: number) {
    return await this.request.get(`/comments/${commentId}`);
  }

  async updateComment(commentId: number, updatedCommentData: object) {
    return await this.request.put(`/comments/${commentId}`, {
      data: updatedCommentData
    });
  }

  async deleteComment(commentId: number) {
    return await this.request.delete(`/comments/${commentId}`);
  }
}