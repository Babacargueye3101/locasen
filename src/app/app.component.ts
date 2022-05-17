import { LoginComponent } from './pages/login/login.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened=false;
  title = 'locasen';
  constructor(public dialog:MatDialog){

  }
  onpenLogin(){
    this.dialog.open(LoginComponent)
  }
}
