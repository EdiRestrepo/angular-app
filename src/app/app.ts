import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title: string = 'angular-app';

  users: string[] = ['Jhon', 'Maria', 'Pedro', 'Ana'];
  //users!: string[];

  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('Hemos hecho click en ',this.visible);
  }
}
