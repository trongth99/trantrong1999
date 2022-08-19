import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AppService} from './../app.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public appService: AppService,) { }

  login(username: string, password: string): Observable<any> {
    let data = {
      username,
      password
    }
    let mod = `/login`;
    return this.appService.curlData(mod, data, 'post', 'auth');
  }
}
