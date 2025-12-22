import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PassangerService } from '../../services/passanger.service';
import { Ipassanger } from '../../models/passanger';

@Component({
  selector: 'app-passanger-dashboard',
  templateUrl: './passanger-dashboard.component.html',
  styleUrls: ['./passanger-dashboard.component.scss']
})
export class PassangerDashboardComponent implements OnInit {
  constructor(private _passangerServ: PassangerService) { }
  passArr: Array<Ipassanger> = []
  checkInArr !: Array<Ipassanger>
  ngOnInit(): void {
    this.fetchAll()
    this.getCount()
  }

  fetchAll() {
    this._passangerServ.getAll()
      .subscribe({
        next: res => {
          this.passArr = res
        },
        error: err => {
          console.log(err)
        }
      })
  }
  getCount() {
    this.checkInArr = this.passArr.filter(f => f.checkInDate)
  }
  getRemoveFlag(flag: boolean) {
    if (flag) {
      this.getCount()
    }
  }
}
