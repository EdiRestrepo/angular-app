import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html'
})
export class Counter implements OnInit {

  counter: number = 0;

  @Input()
  title!: string;

  @Output()
  counterPadre = new EventEmitter<number>();

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    const value = this.storage.getItem('counter');
    this.counter = value ? Number(value) : 0;
    console.log('Counter initialized with value:', this.counter);
  }

  setCounter(): void {
    this.counter++;
    this.storage.setItem('counter', this.counter.toString());
    this.counterPadre.emit(this.counter);
  }

//   ngOnInit(): void {
//   if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
//     this.counter = Number(localStorage.getItem('counter')) || 0;
//   } else {
//     this.counter = 0;
//   }
// }

//  setCounter(): void {
//   this.counter++;
//   if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
//     localStorage.setItem('counter', this.counter.toString());
//   }
// }
}
