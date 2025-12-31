import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
productArr: Array<Iproduct> = [
  {
    id: '1',
    name: "Notebook",
    content: "Used for writing notes, assignments, and daily study work"
  },
  {
    id: '2',
    name: "Pen",
    content: "Used to write smoothly on paper with ink"
  },
  {
    id: '3',
    name: "Pencil",
    content: "Used for writing and sketching, easy to erase"
  },
  {
    id: '4',
    name: "Eraser",
    content: "Used to remove pencil marks from paper"
  },
  {
    id: '5',
    name: "Sharpener",
    content: "Used to sharpen pencils for clear writing"
  },
  {
    id: '6',
    name: "Marker",
    content: "Used for bold writing on boards and charts"
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
