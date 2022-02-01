import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: 'gelver',
    password: '12345'
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    //console.log(this.user)
    this.authService.sigin(this.user)
      .subscribe((res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/productos'])
      },
        err => console.log(err)
      )


  }
}
