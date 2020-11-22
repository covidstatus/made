import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isuser:boolean=false;
  isaddmin:boolean=false;
  //cart
  @Input() childMessage:number;

  constructor(private auth:AuthService, private us:UsersService, private cart_ser:CartService) { }

  ngOnInit(): void {
    
    this.auth.authUser.subscribe(user =>{
      if(user){
        this.isuser=true;
        this.auth.userid=user.uid;
        this.us.userdata().subscribe(data => {
          if(data['admin']) this.isaddmin=true;
          else this.isaddmin=false
        })
      } 
      else this.isuser=false
    });



   
  }
  
  logout(){
    this.auth.logout().then(()=> alert('DO YOU WANT TO LOG OUT '))
  }
  
 


}
