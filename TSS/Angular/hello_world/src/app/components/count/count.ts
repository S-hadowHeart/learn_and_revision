import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-count',
  imports: [],
  templateUrl: './count.html' ,
  styleUrl: './count.scss',
})
export class Count {
  countNumber = signal(0);

  increment()
  {
      this.countNumber.update((val) => val+1);
  }
  decrement()
  {
    this.countNumber.update((val) => val - 1)
  }
  reset()
  {
    this.countNumber.set(0)
  }
}
