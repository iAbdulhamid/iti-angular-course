import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-prodect-list',
  templateUrl: './prodect-list.component.html',
  styleUrls: ['./prodect-list.component.scss']
})
export class ProdectListComponent implements OnInit {
  categoriesList: ICategory[];
  prodList: IProduct[];
  orderTotalPrice: number = 0;
  selectedCategoryId: Number = 1;

  constructor() {
    this.prodList = [
      { id: 100, name: 'Lenovo laptop', price: 2500, quantity: 2, imgURL: 'https://fakeimg.pl/100x50', categoryID: 1},
      { id: 101, name: 'Apple laptop', price:  4500, quantity: 5, imgURL: 'https://fakeimg.pl/100x50', categoryID: 1},
      { id: 102, name: 'Acer tablet', price: 300, quantity: 0, imgURL: 'https://fakeimg.pl/100x50', categoryID: 2},
      { id: 103, name: 'Samsung tablet', price: 2000, quantity: 6, imgURL: 'https://fakeimg.pl/100x50', categoryID: 2},
      { id: 104, name: 'Samsung Mobile', price: 1200, quantity: 1, imgURL: 'https://fakeimg.pl/100x50', categoryID: 3},
    ];
    this.categoriesList = [
      { id: 1, name: 'Laptops'},
      { id: 2, name: 'Tablets'},
      { id: 3, name: 'Mobiles'},
    ];
  }

  ngOnInit(): void {
  }

  buy(prodPrice: number, qtyToBuy: any) {
    /// casting types:
    /// let qty: number = qtyToBuy;   /// impilict casting
    /// let qty: number = qtyToBuy as number;
    /// let qty: number = Number(qtyToBuy);
    /// let qty: number = parseInt(qtyToBuy);
    let qty: number = +qtyToBuy;
    this.orderTotalPrice += (qty * prodPrice);
  }

  trackByFn(index: number, prod: IProduct) : number {
    return prod.id;
  }
}
