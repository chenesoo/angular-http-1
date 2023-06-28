import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './picsum.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getImageList(): Promise<Image[] | undefined> {
    return this.http.get<Image[]>('https://picsum.photos/v2/list').toPromise();
  }
}
