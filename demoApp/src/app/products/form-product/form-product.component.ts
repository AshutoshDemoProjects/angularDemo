import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from 'src/app/common/classes/Product';
import { ProductService } from 'src/app/common/service/Product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  title: string = "Add";
  /* @Output('AddProduct') addEmit:EventEmitter<Product>=new EventEmitter(); */
  @ViewChild('name') name: ElementRef;
  prodId: number;
  price: number;
  desc: string;
  mfgDate: Date;
  //prom:Promise<number>;
  //observableSubscription:Subscription;
  constructor(private prodService: ProductService, private activeRoute: ActivatedRoute, private http: HttpClient) {
    /* this.prom=new Promise((resolve,reject)=>{
     let count=0;
      setInterval(()=>{
       resolve(count);
       count++;
     },2000);
    });
    this.prom
    .then((data:number)=>console.log(data))
    .catch((err)=>alert(err)); */
    /* let ob:Observable<number>;
    ob=interval(1000); */
    /* ob=Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        if(count==7)
          observer.error(new Error('some error')); 
        if(count==5)
          observer.complete();
        count++;
      },2000);
    }); */

    /* this.observableSubscription=ob.pipe(filter(data=> data%2 !== 0),map((data:number)=>{
      return data*data*data;
    })).subscribe(
      (data)=>{console.log(data);},
      (error)=>{console.table(error);},
      ()=>{console.warn('Completed')} 
      ); */
  }
  ngOnDestroy(): void {
    //this.observableSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.title = "Edit";
        let prod: Product = this.prodService.getProduct(+params.id);
        this.prodId = prod.id;
        //this.name.nativeElement.value = prod.name;
        this.price = prod.price;
        this.desc = prod.description;

      }
    });
  }
  onAdd() {

    let prod: Product = { name: this.name.nativeElement.value, price: this.price, description: this.desc, mfgDate: this.mfgDate };
    //this.addEmit.emit(prod);
    this.prodService.addProduct(prod);
    //this.http.post('localhost:3000', prod);

  }
}
/* this.http.post('localhost:3000', prod).subscribe((responseData) => {
      console.log(responseData);
    }); */