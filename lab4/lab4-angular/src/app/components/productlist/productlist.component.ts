import { Component } from '@angular/core';
import { ProductInterface } from '../productlist/ProductInterface';
import { AlertComponent } from '../alert/alert.component';
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
  products : ProductInterface[] = [
    {name: "product1", bought: true},
    {name: "product2", bought: false}
  ]
  alert : boolean = false
  addProduct(product : ProductInterface) {
    if (product.name === "") {
      this.alert = true
      return
    }else if (this.products.some(p => p.name === product.name)) {
      this.alert = true
      return
    }else{
      this.alert = false
      this.products.push(product)
    }
  }
  changeBought(product : ProductInterface) {
    product.bought = !product.bought
  }
  removeAllBought() {
    this.products = this.products.filter(p => p.bought === false)
  }
}
