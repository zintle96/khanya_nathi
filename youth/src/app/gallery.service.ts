import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  Key = "a6ckpoZmznZExDz8Rf34uj8iIC2xbgqu39lhPAjN5Gk";
  page = 1;
  per_page = 20;
  getImage() {
    return this.http.get(`https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}`);
  }

}
