import { SignupComponent } from './pages/signup/signup.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginserviceService } from './service/loginservice.service';
import { environment } from './../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './pages/home/home.component';
import {MatInputModule} from '@angular/material/input';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatProgressSpinnerModule

  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
