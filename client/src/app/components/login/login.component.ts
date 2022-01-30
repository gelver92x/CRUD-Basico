import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
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

  constructor(private authServide: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.user)
    this.authServide.sigin(this.user).subscribe( (res: any) =>{
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/productos'])
    })


  }
}
