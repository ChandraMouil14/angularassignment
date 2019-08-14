import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PasswordComponent } from './password/password.component';
import { TextComponent } from './text/text.component';
import { EmailComponent } from './email/email.component';
import { NumberComponent } from './number/number.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { DateComponent } from './date/date.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PasswordComponent, TextComponent, EmailComponent, NumberComponent, CheckboxComponent, RadioComponent, DateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
