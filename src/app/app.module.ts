import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchStrPipe} from './search-str.pipe';
import {ClientDetailComponent} from './components/client-detail/client-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchStrPipe,
    ClientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
