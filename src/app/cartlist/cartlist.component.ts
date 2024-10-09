import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
cartItems:any[]=[];
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.cartItems$.subscribe((items: any[])=>
      {
      this.cartItems=items;

    })
  }

}
