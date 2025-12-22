import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { UuidService } from '../../services/uuid.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('formRef') formRef ! : NgForm
  constructor(private _prodService : ProductService,
              private _uuidService : UuidService,
              private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }
  onAddProd(){
    if(this.formRef.valid){
      let prodObj ={
      ...this.formRef.value,
      id : this._uuidService.Uuid()
    }
    this._prodService.addProd(prodObj)
      .subscribe({
        next : res=>{
          this._snackBar.getSnackBar('The new product is added successfully !!!')
          this.formRef.reset()
        },
        error : err =>{
          this._snackBar.getSnackBar(err)
        }
      })
  }
    }
  }

