import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
  }
// call service method to add item to cart 
  addToCart( item:any){
   this.cartservice.addToCart(item);
  }
}

