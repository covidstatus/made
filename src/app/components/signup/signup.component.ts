import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Uers } from 'src/app/interfaces/uers';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errmsg=''
  constructor(private authser:AuthService, private fs:UsersService, private route:Router) { }

  ngOnInit(): void {
  }
  
  signup(form){
    let data:Uers=form.value;
    this.authser.signup(data.email, data.password)
    .then(result => {
      console.log(result);
      this.fs.adduser(result.user.uid, data.name, data.password);
      this.route.navigate([''])
    })
    .catch(err => this.errmsg=err.message)
  }
}
