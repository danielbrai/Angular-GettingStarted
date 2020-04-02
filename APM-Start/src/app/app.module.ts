import { ProductListComponent } from './products/product-list-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacePipe, StarRatingComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
