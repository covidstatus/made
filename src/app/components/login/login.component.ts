import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Uers } from 'src/app/interfaces/uers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err:string=''
  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  
  login(formVal){
    let data:Uers=formVal.value;
    this.auth.signin(data.email, data.password)
    .then(result => {
      console.log(result);
      this.route.navigate([''])
    })
    .catch(err => this.err=err.message)
  }
}
