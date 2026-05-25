import { Component, signal } from '@angular/core';
import { Greet } from '../components/greet/greet';
import { Count } from "../components/count/count";

@Component({
  selector: 'app-home',
  imports: [Greet, Count],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  homeGreetMsg = signal("Hello ");
  keyUpHandler(event: KeyboardEvent)
  { 
    if (/^[a-zA-z ]$/.test(event.key))
    {

      this.homeGreetMsg.set( this.homeGreetMsg() + event.key)
    }
    console.log(`User type smth ${event.key}`)
  }
} 
