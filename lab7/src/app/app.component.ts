import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from './components/clock/clock.component';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab7';
  format : '12' | '24' = '12';
  showClock: boolean = false;
  lastTime: string = '';
  @ViewChild(ClockComponent) clock!: ClockComponent;

  createClock(): void {
    this.showClock = true;
  }
  destroyClock(): void {
    if(this.clock){
      this.lastTime = this.clock.getCurrTime();
    }
    this.showClock = false;
  }
  changeFormat(): void {
    this.format = this.format === '12' ? '24' : '12';
  }
}
