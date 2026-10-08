import { APIRequestContext, APIResponse } from 'playwright/test';

export class PhotoApi {
    constructor(private request: APIRequestContext) { }

    async getAllPhotos(): Promise<APIResponse> {
        return this.request.get('/photos');
    }

    async getPhoto(id: number): Promise<APIResponse> {
        return this.request.get(`/photos/${id}`, {
            timeout: 30000
        });
    }

    async createPhoto(photoData: any): Promise<APIResponse> {
        return this.request.post('/photos', { data: photoData });
    }

    async createMultiplePhotos(photoMultipleData: any[]): Promise<APIResponse> {
        return this.request.post('/photos', { data: photoMultipleData });
    }
}