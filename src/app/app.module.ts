import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,FormControl} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { BienService } from './service/bien.service';
import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import { RechercheComponent } from './recherche/recherche.component';
import { RouterModule, Routes, routerLinkActive} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatTabsModule} from '@angular/material/tabs';
import { FormiComponent } from './formi/formi.component';
import { FormcComponent } from './formc/formc.component';
@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ImmobilierComponent,
    HeaderComponent,
    DetailComponent,
    FooterComponent,
    RechercheComponent,
    HomeComponent,
    FormiComponent,
    FormcComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
     FormsModule,
     MatButtonModule,
     NoopAnimationsModule,
     MatCheckboxModule,
     MatToolbarModule,MatTabsModule,
     MatIconModule,MatCardModule,MatSelectModule,NgxPaginationModule,
     RouterModule.forRoot([
        {path: '',redirectTo:'/home',pathMatch:'full'},
        {path: 'home',component: HomeComponent},
        {path: 'detail/:id',component:DetailComponent},
        {path:'**',component:HomeComponent}

     ])
  ],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,
  MatCardModule,MatSelectModule,MatTabsModule],
  providers: [BienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
