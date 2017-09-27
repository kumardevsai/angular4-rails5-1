import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CommonService {
  constructor(private http: Http) { }

  getUsers() {
     return this.http.get('/post').map((response) => response.json())
  };

   getAll(): any[] {
    return [
      {id: 1, name: "tuanna"},
      {id: 2, name: "tuannb"},
      {id: 3, name: "tuannc"},
    ];
  }
}
