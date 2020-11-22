import { Component, OnInit, ViewChild } from '@angular/core';
import { Good } from 'src/app/interfaces/good';
import { Subscription } from 'rxjs';
import { GoodsService } from 'src/app/services/goods.service';
import { CartService } from 'src/app/services/cart.service';
import { ThrowStmt } from '@angular/compiler';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  total=0;
  theindex:number= -1;
  goods:Good[]=[];
  goodsObservable:Subscription;
  
  //
  @ViewChild(NavbarComponent) child;

  constructor(private gser:GoodsService, private cartSer:CartService) { }


  ngOnInit(): void {
    this.goodsObservable=this.gser.getdata().subscribe(data => {
      this.goods=data.map(ele => {
        return{
          id:ele.payload.doc.id,
          name:  ele.payload.doc.data()['name'],
          price: ele.payload.doc.data()['price'],
          photo: ele.payload.doc.data()['photo']
        }
      })
    });
  }

add(index:number){
    this.theindex= +index
}


buy(amount:number,index){
  let selectGood=this.goods[index];
  let data={
    name:selectGood.name,
    price:selectGood.price,
    amount: +amount, //عشان يعرف انه نمبر 
  }
  this.cartSer.addToCart(data).then(() => this.theindex=-1);
  this.total+=1;//send to cart services to show it in the navbar 
  this.cartSer.total=this.total;
}

}
