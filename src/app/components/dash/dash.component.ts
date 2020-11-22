import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoodsService } from 'src/app/services/goods.service';
import { Good } from 'src/app/interfaces/good';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  alldata:Good[];
  @ViewChild('img') img:ElementRef;
 
  constructor(private gs:GoodsService,) { }

  ngOnInit(): void  {
    this.gs.alldata().subscribe(data=>{
    this.alldata=data.map(ele =>{
      return{
        id:ele.payload.doc.id,
        name:ele.payload.doc.data()['name'],
        price:ele.payload.doc.data()['price'],
      }
    })
    });
  }
  

  add(form:NgForm){
    let name=(<Good>form.value).name,
        price=(<Good>form.value).price,
        img=this.img.nativeElement.files[0];
    this.gs.addgood(name, price, img).then(msg =>  alert(msg))
  } 




  
  delate(index){
    this.gs.delateitem(this.alldata[index].id)
  }
  
  save(index){
    this.gs.save_item(this.alldata[index].id,this.alldata[index].price);
  }

}
