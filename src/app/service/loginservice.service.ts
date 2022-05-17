import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public message='';
  constructor(public auth:AngularFireAuth) { }

  public signIn(email: string, password: string){
     if(email.trim()!=null && password.trim()!=null){
      this.auth.signInWithEmailAndPassword(email,password).then(value => {
        console.log('Welcome to my App');

      })
      .catch(err => {
        console.log('ERRRREURRRRRRRRRRRRRRRRRRRRR: ', err.message);
        this.message=err.message
      });
     }

  }
  public signup(email: string, password: string){
    this.auth.createUserWithEmailAndPassword(email,password).then(value => {
      console.log('Welcome to my App');

    })
    .catch(err => {
      console.log('ERRRREURRRRRRRRRRRRRRRRRRRRR: ', err.message);
      this.message=err.message
    });
  }
}
