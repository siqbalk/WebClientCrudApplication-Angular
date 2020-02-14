import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddupdateproductComponent } from '../addupdateproduct/addupdateproduct.component';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(public productService: ProductService,
    // tslint:disable-next-line:align
    private dialog: MatDialog,
    // tslint:disable-next-line:align
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetExpenseGrid();
    this.productService.GetAllProducts();
  }
   resetExpenseGrid() {
     this.productService.products = [];
   }

   addEditExpenseItem(productId?: number) {
     console.log(productId);

        // tslint:disable-next-line:align
        const dialogConfig = new MatDialogConfig();
     dialogConfig.autoFocus = true;
     dialogConfig.disableClose = true;
     // tslint:disable-next-line:quotemark
     dialogConfig.width = "50%";
     dialogConfig.data = {
          productId
        };
     this.dialog.open(AddupdateproductComponent, dialogConfig);

   }

   DeleteItem(index) {
     this.productService.DeleteExpense(index);
     this.toastr.success('Expense successfully deleted', 'AEM', {
       timeOut: 2000
     });
   }
}
