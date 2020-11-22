import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fs:AngularFirestore,private as:AuthService) { }

  adduser(id,name,pass){
    return this.fs.doc('users/'+id).set({
      name,
      pass
    })
  }

  userdata(){
    return this.fs.doc('users/' + this.as.userid).valueChanges()
  }
}
