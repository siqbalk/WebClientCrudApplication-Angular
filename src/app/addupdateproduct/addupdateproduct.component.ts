import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../shared/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addupdateproduct',
  templateUrl: './addupdateproduct.component.html',
  styleUrls: ['./addupdateproduct.component.css']
})
export class AddupdateproductComponent implements OnInit {
  formDataProduct: Product = new Product();


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddupdateproductComponent>,
    private productservices: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    if (!isNullOrUndefined( this.data.productId)) {
      console.log(this.productservices.products[this.data.productId]);
      this.formDataProduct = Object.assign({}, this.productservices.products[this.data.productId]);
    }

  }
  closeModel() {
    this.dialogRef.close();
  }



  onSubmit(form: NgForm) {
      console.log(form.value);

      if (!isNullOrUndefined( this.data.productId)) {
          this.productservices.UpdateExpense(form.value);
          this.toastr.info('Expense successfully updated', 'AEM' , {
            timeOut: 2000
          });
      } else {
      this.productservices.AddProduct(form.value);
      this.toastr.success('Expense successfully recorded', 'AEM' , {
        timeOut: 2000
      });
      }
      console.log('After Save');
      console.log(this.productservices.products);

      this.closeModel();

  }

}
