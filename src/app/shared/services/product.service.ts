import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // tslint:disable-next-line:quotemark
  baseUrl = "http://localhost:64747/api";
   products: Product[];
   product: Product = new Product();
  constructor(private http: HttpClient) { }

  AddProduct(form: Product) {


    return this.http.post(this.baseUrl + '/Products', form).
    subscribe((response) => {
     this.GetAllProducts();
     console.log('submit was completed');
    }
    );

  }


  UpdateExpense(form: Product) {
    return this.http.put(this.baseUrl + '/Products/' + form.productId, form)
              .subscribe((response) => {
                this.GetAllProducts();
              });
  }

  GetAllProducts() {
   // tslint:disable-next-line:quotemark
   this.http.get(this.baseUrl + "/products").
    subscribe((response) =>
    this.products = response as Product[]);
  }

  DeleteExpense(id) {

    // tslint:disable-next-line:quotemark
    this.http.delete(this.baseUrl  + "/Products/" + id).
    subscribe((response) => {
     this.GetAllProducts();
     console.log('submit was completed');
    }
    );
  }
}
