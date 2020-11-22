import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userid:string='';
  authUser:Observable<firebase.User>

  constructor(private auth:AngularFireAuth) {
    this.authUser=auth.user
  }

  signup(email,password){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  signin(mail,pass){
    return this.auth.signInWithEmailAndPassword(mail,pass)
  }

  logout(){
    return this.auth.signOut();
  }
}
