import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { OfRxjsComponent } from './pages/of-rxjs/of-rxjs.component';

// Material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MapRxjsComponent } from './pages/map-rxjs/map-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    OfRxjsComponent,
    SidebarComponent,
    HomeComponent,
    MapRxjsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
