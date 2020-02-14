import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddupdateproductComponent } from './addupdateproduct/addupdateproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
// tslint:disable-next-line:import-spacing
import { FormsModule }   from '@angular/forms';
// import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    AddupdateproductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [AddupdateproductComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
