import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
   HttpClientModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar:true
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
