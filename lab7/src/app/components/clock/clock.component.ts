import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent {
  @Input({ required: true }) public format!: '12' | '24'; 
  protected time: string = '';
  private intervalId: any;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['format']) {
      this.getTime();
    }
  }
  ngOnInit(): void {
    this.getTime();
    this.updateTime();
    console.log('ClockComponent initialized');
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('ClockComponent destroyed');
  }

  private getTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    if (this.format === '12') {
      this.time = `${hours % 12}:${minutes}:${seconds}`;
    }else{
      this.time = `${hours}:${minutes}:${seconds}`;
    }
  }
  protected updateTime(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.getTime();
    }, 1000);
  }
  protected stopTime(): void {
    clearInterval(this.intervalId);
  }
  protected startTime(): void {
    this.updateTime();
  }
  public getCurrTime(): string {
    return this.time;
  }
}
