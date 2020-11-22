import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs:AngularFirestore, private firStorage:AngularFireStorage) { }

  getdata(){
    return this.fs.collection('goods').snapshotChanges();
  }



  addgood(name:string, price:number, img:File){
    return new Promise((resolve,reject)=>{
      let ref=this.firStorage.ref('goods/' + img.name);
      ref.put(img).then(()=> {
        ref.getDownloadURL().subscribe(photo => {
          this.fs.collection('goods').add({
            name,
            price,
            photo,
          }).then(() => resolve('Added')).catch(err=>{console.log(err);
          })
        })
      });
    })
  }


  //all data fomr admin
  alldata(){
    return this.fs.collection('goods').snapshotChanges();
  }
  
  delateitem(id){
    return this.fs.doc(`goods/${id}`).delete();
  }

  save_item(id,price){
    return this.fs.doc(`goods/${id}`).update({price})
  };
}
