import { ProductListComponent } from './products/product-list-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarRatingComponent,
    ProductDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: ' welcome', pathMatch: 'full' },
      { path: '**', redirectTo: ' welcome', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
