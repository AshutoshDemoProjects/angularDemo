import { Component } from "@angular/core";
import { Product } from "../common/classes/Product";
import { ProductService } from "../common/service/Product.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-products',//element selector
    //selector:'[app-products]',//atrribute selector
    //selector:'.app-products',//class selector
    //template:`<h1>Products working</h1>`,
    templateUrl: './products.component.html',
    /* styles:[ `h1 {
                background-color:#020a0a;
                color:#fff;
            }`,'div { background-color:red; color:green;}'] */
    styleUrls: ['./products.component.css']/* ,
    providers:[ProductService] */
})
export class ProductsComponent {
    /* product1:Product;
    product2:Product; */
    product: Product;
    prodArr: Product[];
    /* flag: boolean = true;
    showForm: boolean = false;
    showList: boolean = false; */
    constructor(private prodService: ProductService, private router: Router) {
        /* this.product1=new Product();
        this.product1.name='xyz';
        this.product1.price=1200;
        this.product1.description='asjdfhkasdhfkjad';
        this.product2=new Product('pqr',2000,'aksjdakshdkj'); */
        /* this.prodArr=;
        this.product=this.prodArr[0]; */
    }
    ngOnInit() {
        this.prodArr = this.prodService.getProducts();
        /*this.product = this.prodService.getProduct(1001); */
    }
    /* onProductClick(product: Product) {
        this.showList = false;
        this.showForm = false;
        this.product = product;
    } */
    /* onEditChild(event){
        console.log(event);
    } */
    /* onAdd(data:Product){
        console.log(data);
    } */
    /* onShowList(){
        this.showList=true;
        this.showForm=false;
    } */
    onShowForm() {
        /* this.showForm = true;
        this.showList = false; */

        //private activeRoute:ActivatedRoute
        //this.router.navigate(['add'],{relativeTo:this.route});
        this.router.navigate(['products', 'add']);
    }
    /* onInput(event){
        console.log(event);
        this.product1.name=event.target.value;
    } */
}