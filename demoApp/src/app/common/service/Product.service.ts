import { Injectable } from "@angular/core";
import { Product } from "../classes/Product"
import { LoggingService } from "./Logging.service";
@Injectable()
export class ProductService {
    prodArr: Product[] = [
        { id: 1001, name: 'xyz', price: 2000, description: 'alskdjlaksjdflkjasd', mfgDate: new Date(2021, 2, 23) },
        { id: 1002, name: 'pqr', price: 3000, description: 'alskdjlaksjdflkjasd', mfgDate: new Date(2021, 0, 23) },
        { id: 1003, name: 'abc', price: 214, description: 'alskdjlaksjdflkjasd', mfgDate: new Date(2021, 4, 23) },
        { id: 1004, name: 'qwety', price: 200, description: 'alskdjlaksjdflkjasd', mfgDate: new Date(2021, 1, 23) }, { name: 'xsadfyz', price: 2000, description: 'alskdjlaksjdflkjasd' },
        { id: 1005, name: 'zcxv', price: 2500, description: 'alskdjlaksjdflkjasd', mfgDate: new Date(2021, 7, 23) },
    ];
    constructor(private logSer: LoggingService) { }
    getProducts(): Product[] {
        return this.prodArr;
    }
    getProduct(id: number): Product {
        return this.prodArr.find(prod => prod.id === id);
    }
    addProduct(prod: Product) {
        this.prodArr.push(prod);
    }
}