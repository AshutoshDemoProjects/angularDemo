import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Product } from 'src/app/common/classes/Product';
import { ProductService } from '../../common/service/Product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  @Input('data') product: Product;
  //@ContentChild
  //product: Product;
  constructor(private prodService: ProductService, private route: ActivatedRoute, private router: Router, private activeRoute: ActivatedRoute) {
    //console.log("SingleProductComponent:constructor");
  }
  /* ngOnChanges(event){
    console.log("SingleProductComponent:ngOnChanges");
    console.log(event);
  }*/
  ngOnInit() {
    //console.log("SingleProductComponent:ngOnInit");
    this.activeRoute.params.subscribe((params: Params) => {
      if (params.id)
        this.product = this.prodService.getProduct(+params.id);
    });
  }
  /*ngDoCheck(){
    console.log("SingleProductComponent:ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("SingleProductComponent:ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("SingleProductComponent:ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("SingleProductComponent:ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("SingleProductComponent:ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("SingleProductComponent:ngOnDestroy");
  } */

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
