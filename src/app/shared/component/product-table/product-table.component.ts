import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  constructor() { }
  @Input() prodObj ! : Iproduct
  ngOnInit(): void {
  }
  selectStatus : string = 'In Progress'
  onProg(){
    this.selectStatus = 'In Progress'
  }
  onDisp(){
    this.selectStatus = 'Dispatch'
  }
  onDeli(){
    this.selectStatus = 'Delivered'
  }
}
