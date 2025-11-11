import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./counter/counter";
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title: string = 'angular-app';

  subTitle = 'Contador con estado persistente';

  users: string[] = ['Jhon', 'Maria', 'Pedro', 'Ana'];

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.counter = Number(this.storage.getItem('counter')) || 0;
  }
  //users!: string[];

  visible: boolean = false;

  counter: number = 0;

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('Hemos hecho click en ',this.visible);
  }

  setCounter(counter: number): void {
    this.counter = counter;
  }
}
