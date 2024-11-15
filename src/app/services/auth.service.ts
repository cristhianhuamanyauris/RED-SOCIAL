import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private autenticado = false;

  login(){
    this.autenticado = true;
  }

  logout(){
    this.autenticado = false;
  }

  logueado():boolean {
    return this.autenticado;
  }

  constructor() { }
}
