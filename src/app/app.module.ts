import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/materials/material.module';
import { PassangerModule } from './shared/passanger/passanger.module';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './shared/component/product-form/product-form.component';
import { ProductTableComponent } from './shared/component/product-table/product-table.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductTableComponent,
    ProductDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    PassangerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
