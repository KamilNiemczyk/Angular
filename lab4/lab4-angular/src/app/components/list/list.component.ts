import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items : string[] = ["aa", "bb"]
  addItem(item : string) {
    this.items.push(item)
  }
  removeItem(item : string) {
    this.items = this.items.filter(i => i !== item)
  }
}
