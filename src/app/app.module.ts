import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {DataCollectionService} from './data-collection.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { IndiaDashboardComponent } from './india-dashboard/india-dashboard.component';
import {PdfViewerModule} from 'ng2-pdf-viewer'
import { WorldGlanceComponent } from './world-glance/world-glance.component';
import { HelplineComponent } from './helpline/helpline.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WorldGlanceComponent,
    IndiaDashboardComponent,
    HelplineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    PdfViewerModule
  ],
  providers: [DataCollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
