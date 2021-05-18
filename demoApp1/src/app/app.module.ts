import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { FormProductComponent } from './products/form-product/form-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { BasicHightlightDirective } from './common/directives/basic-hightlight.directive';
import { BetterHightlightDirective } from './common/directives/better-hightlight.directive';
import { UnlessDirective } from './common/directives/unless.directive';
import { ShortenPipe } from './common/pipes/shorten.pipe';
import { LoggingService } from './common/service/Logging.service';
import { ProductService } from './common/service/Product.service';
import { AuthGuardService } from './common/service/auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
let routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:uid/:name', component: SingleUserComponent },
  { path: 'products', canActivate: [AuthGuardService], component: ProductsComponent },
  { path: 'products/add', canActivate: [AuthGuardService], component: FormProductComponent },
  { path: 'products/list', canActivate: [AuthGuardService], component: ListProductComponent },
  { path: 'products/:id', canActivate: [AuthGuardService], component: SingleProductComponent },
  { path: 'products/:id/edit', canActivate: [AuthGuardService], component: FormProductComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page Not Found!' } }
];
/*
{ path: 'products', canActivateChild: [AuthGuardService], component: ProductsComponent ,children:[
  { path: 'add', component: FormProductComponent },
  { path: 'list', component: ListProductComponent },
  { path: ':id', component: SingleProductComponent },
  { path: ':id/edit', component: FormProductComponent },]},
*/
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SingleProductComponent,
    FormProductComponent,
    ListProductComponent,
    HomeComponent,
    UserComponent,
    SingleUserComponent,
    BasicHightlightDirective,
    BetterHightlightDirective,
    UnlessDirective,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
