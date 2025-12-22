import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  productArr : Array<Iproduct> = [
  {
    id: '1',
    name: "Switch",
    content: "Used to turn electrical devices on or off safely in homes and offices"
  },
  {
    id: '2',
    name: "Socket",
    content: "Provides a point to connect electrical plugs and appliances"
  },
  {
    id: '3',
    name: "Wire",
    content: "Carries electric current from one point to another in a circuit"
  },
  {
    id: '4',
    name: "MCB",
    content: "Protects electrical circuits from overload and short circuit"
  },
  {
    id: '5',
    name: "Fan",
    content: "Used for air circulation and cooling in rooms"
  },
  {
    id: '6',
    name: "LED Bulb",
    content: "Energy-efficient light source used for illumination"
  }
];


  getAllProd(){
    return of(this.productArr)
  }
  addProd(obj : Iproduct){
    this.productArr.unshift(obj)
    return of(obj)
  }
}
