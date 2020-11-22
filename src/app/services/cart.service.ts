import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Good } from '../interfaces/good';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({  
  providedIn: 'root'
})
export class CartService { 
  total:number=0;
  stream:Observable<string>;
    
  constructor(private fs:AngularFirestore, private auth:AuthService, private http:HttpClient) { }

  addToCart(data:Good){
    return this.fs.collection(`users/${this.auth.userid}/cart`).add(data)
  }

  


  getdata(){
    return this.fs.collection(`users/${this.auth.userid}/cart`).snapshotChanges()
  }

  delate(id){
    return this.fs.doc(`users/${this.auth.userid}/cart/${id}`).delete()
  }

  save(id,amount){
    console.log(this.total);
    return this.fs.doc(`users/${this.auth.userid}/cart/${id}`).update({amount});
  }

 

}
