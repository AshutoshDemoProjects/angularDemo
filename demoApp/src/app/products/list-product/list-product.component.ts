import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/classes/Product';
import { ProductService } from 'src/app/common/service/Product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  //@Input('data') productArr:Product[];
  productArr: Product[];
  constructor(private prodService: ProductService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productArr = this.prodService.getProducts();
    console.log(this.productArr);
  }

}
