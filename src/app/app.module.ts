import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogCardComponent} from './blog-card/blog-card.component';
import {BlogComponent} from './blog/blog.component';
import {CardComponent} from './card/card.component';
import {FormsModule} from "@angular/forms";
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogCardComponent,
    BlogComponent,
    CardComponent,
    DeleteModalComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
