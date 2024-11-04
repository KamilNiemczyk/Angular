import { Component } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products : string[] = ["product1", "product2"]
  alert : boolean = false
  addProduct(product : string) {
    if (product === "") {
      this.alert = true
      return
    }else if (this.products.includes(product)) {
      this.alert = true
      return
    }else{
      this.products.push(product)
      this.alert = false
    }
  }
}
