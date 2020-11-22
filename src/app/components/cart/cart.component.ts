import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Good } from 'src/app/interfaces/good';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:Good[];

  constructor(private cartSer:CartService) { }

  ngOnInit(): void {
   
    this.cartSer.getdata().subscribe(data => {
      this.cart=data.map(ele => {
        return{
          id:ele.payload.doc.id,
          name:ele.payload.doc.data()['name'],
          price:ele.payload.doc.data()['price'],
          amount:ele.payload.doc.data()['amount'],
        }
      });
    });
  }

  delate(index){
    this.cartSer.delate(this.cart[index].id);
    
  }
  
  save(index){
   return this.cartSer.save(this.cart[index].id,this.cart[index].amount);
  }
  
  

}
