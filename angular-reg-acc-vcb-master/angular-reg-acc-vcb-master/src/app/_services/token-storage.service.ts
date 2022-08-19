import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

const TOKEN_KEY = 'auth_token';
const TOKEN_EXPIRES = 'expires_in';
const REFRESH_TOKEN_KEY = 'refresh_token';
const REFRESH_TOKEN_EXPIRES = 'refresh_expires_in';
const TOKEN_TYPE = 'token_type';
const USER_KEY = 'auth_user';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {
  isLoggedIn = false;

  constructor(private router: Router) { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveLogin(data: any): void {
    this.saveToken(data.token);
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    window.sessionStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESH_TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return user;
    }
    return '';
  }

  public cLogin(): boolean {
    this.isLoggedIn = !!this.getToken();
    if (!this.isLoggedIn) {
      return false;
    }
    return true;
  }
}
