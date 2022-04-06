import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { products } from '../products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  
})
export class CartComponent implements OnInit {
  
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''});
    
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,) { }
    onSubmit(): void {
      // Process checkout data here
      this.items = this.cartService.clearCart();
      window.alert('Su pedido ha sido enviado', );
      this.checkoutForm.reset();
    }
  ngOnInit(): void {
  }
 
  
}

