import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //To store items
  private cartItems=new BehaviorSubject<any[]>([])

  cartItems$=this.cartItems.asObservable();
  

  constructor() { }

  addToCart(item:any){
    const currentItems=this.cartItems.getValue();
    //get current cart items
    this.cartItems.next([...currentItems,item]);
  // add new item and emit new array
  }
}
