import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAlbumsComponent } from './my-albums/my-albums.component';


const routes: Routes = [
  {path: 'my-albums', component: MyAlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
