import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {CardComponent} from "./card/card.component";

const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'card/:cardId', component: CardComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
