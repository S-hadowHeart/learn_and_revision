# Routing 
Angular is a single page application. using routes you can still define diffrent pages that the user can navigate to.

The Browser only loads the bundles related to the route user has accessed

This significantly improves the performance of the app, and user experience

RouterOutlet

app.routes.ts :

```
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then((m) => m.Home)
        }
    },

    {
        path: 'todos',

        pathMatch: 'full',
        loadComponent: () => {
            return import('./todos/todos').then((m) => m.Todos)
        }
    }
];
```

app.ts:

```
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Header],
  template: `
    <app-header/>
    <main>
      <router-outlet/>
    </main>
    
  `,
  styles: [
    `
    main{
      padding: 16px;
    }
    `
  ],
})
export class App {
  protected readonly title = signal('hello_world');
}
```