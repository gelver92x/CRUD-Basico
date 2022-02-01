import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from '../models/usuario';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  sigin(user: usuario) {
    return this.http.post(`${this.API_URI}/signIn`, user)
  }

  loggedIn(): boolean {
    //si localStorage tiene un token retorna 'true'
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
