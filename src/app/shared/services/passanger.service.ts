import { Injectable } from '@angular/core';
import { Ipassanger } from '../models/passanger';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {
  constructor() { }
  passengerArray : Array<Ipassanger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 }
      ]
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null
    }
  ]
  getAll():Observable<Ipassanger[]>{
    return of(this.passengerArray)
  }
  
  updatePass(obj : Ipassanger):Observable<Ipassanger>{
    let getIndex = this.passengerArray.findIndex(f=>f.id === obj.id)
    this.passengerArray[getIndex]=obj
    return of(obj)
  }

  removePass(id: number):Observable<{msg : string, data : Ipassanger}>{
    let getIndex = this.passengerArray.findIndex(f=>f.id == id)
    let removeObj = this.passengerArray.splice(getIndex,1)
    return of({
      msg : `The passanger removed successfully with id ${id} !!!`,
      data : removeObj[0]
    })
  } 
}
