import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassanger } from '../../models/passanger';
import { PassangerService } from '../../services/passanger.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-passanger-card',
  templateUrl: './passanger-card.component.html',
  styleUrls: ['./passanger-card.component.scss']
})
export class PassangerCardComponent implements OnInit {
  @Input() passObj ! : Ipassanger
  @ViewChild('inputRef') inputRef ! : ElementRef
  @Output() emitRemoveFlag : EventEmitter<boolean> = new EventEmitter()
  isEditMode : boolean = false
  constructor(private _passService : PassangerService,
              private _matDialog : MatDialog,
              private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }
  onRemove(){
    // this._passService.removePass(this.passObj)
    const dailogConf = new MatDialogConfig()
    dailogConf.width = '350px'
    dailogConf.disableClose = true;
    dailogConf.maxWidth = '90%';
    dailogConf.data = `Are you sure, want to remove this passanger with id ${this.passObj.id}`
   let matDailogRef = this._matDialog.open(GetConfirmComponent, dailogConf)
    matDailogRef.afterClosed()
      .subscribe({
        next : res=>{
          console.log(res);
          if(res){
            this._passService.removePass(this.passObj.id)
              .subscribe({
                next : res=>{
                  this._snackBar.getSnackBar(res.msg)
                  if(res.data.checkedIn){
                    this.emitRemoveFlag.emit(true)
                  }
                },
                error : err=>{
                  this._snackBar.getSnackBar(err)
                }
              })
          }          
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }
  

  onUpdate(){
    let updated_Obj = {
      ...this.passObj,
      fullname : this.inputRef.nativeElement.value
    }

    // let update = this.inputRef.nativeElement.value
    // updated_Obj.fullname = update
    
    this._passService.updatePass(updated_Obj)
      .subscribe({
        next : res=>{
          this.isEditMode = true
          this._snackBar.getSnackBar('The passanger name is updated successfully !!!')
        },
        error : err =>{
          this._snackBar.getSnackBar(err)
        }
      })
  }

}
