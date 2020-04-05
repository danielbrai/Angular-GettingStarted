import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";

@Component({
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = "Product Detail";
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.product = this.service.getProductById(id);

    console.log(id);

    console.log(this.product);
  }

  onBack(): void {
    this.router.navigate(["/products"]);
  }
}
