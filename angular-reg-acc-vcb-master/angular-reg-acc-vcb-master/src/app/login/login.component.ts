import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      res => {
        if (res.hasOwnProperty('token')) {
          this.tokenStorage.saveLogin(res);
          this.tokenStorage.saveUser(this.username);
          this.isLoginFailed = false;
          this.isLoggedIn = true;

          window.location.reload();

        } else if (!res.hasOwnProperty('token') && res.hasOwnProperty('code')) {
          if (res.code === '400') {
            this.errorMessage = res.mess;
          }
          this.isLoginFailed = true;
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
