import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneService } from './one.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [OneService],
  bootstrap: [AppComponent],
})
export class AppModule {}
