import { Component, Input, OnInit } from '@angular/core';
import { PassangerService } from '../../services/passanger.service';

@Component({
  selector: 'app-passanger-count',
  templateUrl: './passanger-count.component.html',
  styleUrls: ['./passanger-count.component.scss']
})
export class PassangerCountComponent implements OnInit {
  @Input() passCheckIn ! :number
  @Input() passCount ! :number
  constructor(private _passService : PassangerService) { }

  ngOnInit(): void {
   
  }
}
