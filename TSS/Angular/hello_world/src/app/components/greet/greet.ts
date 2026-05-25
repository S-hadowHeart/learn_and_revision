import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greet',
  imports: [],
  templateUrl: './greet.html',
  styleUrl: './greet.scss',
})
export class Greet {
  greetMsg = input("Defalut super hey");
}
