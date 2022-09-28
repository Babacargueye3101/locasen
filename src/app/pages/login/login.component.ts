import { LoginserviceService } from './../../service/loginservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  login='';
  public password='';
  message!:string;
  constructor(private logservice:LoginserviceService) { }

  ngOnInit(): void {

  }

  public signIn(){
    this.logservice.signIn(this.login,this.password)
    this.message=this.logservice.message
  }


}
