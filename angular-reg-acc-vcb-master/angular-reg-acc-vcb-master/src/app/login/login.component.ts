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

  show_button = false;
  show_eye = false;
  checkpasswork = false;
  checkusername = false;

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
     if (this.password == '' && this.username != '') {
      this.checkpasswork = true;
      this.checkusername = false;
    } else if (this.username == '' && this.password != '') {
      this.checkpasswork = false;
      this.checkusername = true;
    } else if (this.username == '' && this.password == '') {
      this.checkpasswork = true;
      this.checkusername = true;
    } else {
      this.checkusername = false;
      this.checkpasswork = false;
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
              this.errorMessage = "tên đăng nhập hoặc mật khẩu của bạn không đúng!!";
            }
            this.isLoginFailed = true;
          }
        },
        err => {
          this.errorMessage = "tên đăng nhập hoặc mật khẩu của bạn không đúng!!";
          this.isLoginFailed = true;
        }
      );
    }

  }

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

}
