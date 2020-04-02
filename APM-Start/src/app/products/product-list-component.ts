import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  pageTile = 'Product List';

  products: IProduct[];
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  _productFilter: string;
  filteredProducts: IProduct[];
  errorMessage: void;

  constructor(private productService: ProductService) { }

  set productFilter(filterCriteria: string) {
    this._productFilter = filterCriteria;
    this.filteredProducts = this.productFilter ? this.performFilter(this.productFilter) : this.products;
  }

  get productFilter(): string {
    return this._productFilter;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => console.log(err)
    });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  performFilter(productFilter: string): IProduct[] {
    return this.products.filter(product => product.productName.toLowerCase().indexOf(productFilter.toLocaleLowerCase()) !== -1);
  }

  onNotify(message: string): void {
    console.log(message);
  }
}
