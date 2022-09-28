import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public  login='';
  public password='';
  message!:string;
  constructor(private logservice:LoginserviceService) { }

  ngOnInit(): void {
  }

  public signup(){
    this.logservice.signup(this.login,this.password)
    this.message=this.logservice.message
  }

}
