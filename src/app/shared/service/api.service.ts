import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllPost()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  
  addPushSubscriber(sub: any) {
    return this.http.post("http://localhost:9000/api/notifications", sub);
  }

  send() {
    return this.http.post("http://localhost:9000/api/newsletter", null);
  }
}
