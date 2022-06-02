import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapRxjsComponent } from './pages/map-rxjs/map-rxjs.component';
import { OfRxjsComponent } from './pages/of-rxjs/of-rxjs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rxjs/operators/of', component: OfRxjsComponent },
  { path: 'rxjs/operators/map', component: MapRxjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
