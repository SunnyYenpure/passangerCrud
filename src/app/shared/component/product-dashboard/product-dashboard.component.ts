import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  prodArr : Array<Iproduct> = []
  constructor(private _prodService : ProductService){}

  ngOnInit(): void {
     this._prodService.getAllProd()
      .subscribe({
        next : res =>{
          this.prodArr = res
        }
      })
  }

}
