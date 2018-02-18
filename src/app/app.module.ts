import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
 
import { AppComponent } from './app.component';
import { PersonService } from './person/person.service';
import { PersonlistComponent } from './person/personlist.component';
import { PersondetailComponent } from './person/persondetail.component';
import { PersoneditComponent } from './person/personedit.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PersonlistComponent,
    PersondetailComponent,
    PersoneditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }