import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CollectionsComponent} from './collections/collections.component';
import {SearchMoviesComponent} from './search-movies/search-movies.component';


const routes: Routes = [
{path:'', component:SearchMoviesComponent,},
{path:'collections', component:CollectionsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
