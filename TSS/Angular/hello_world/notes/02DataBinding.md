# Angular Data-Binding

Binding data between the TypeScript class of the component , and the component's template

## With Signals (modern way):
Example

header.ts

```
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl:'./header.html' ,
  styleUrl: './header.scss',
})
export class Header {
  title = signal('My App is Cool')
}
```

header.html

```
<header>
    <nav>
        {{ title() }}
    </nav>
</header>
```


### without Signals (Traditional way):
Example

header.ts

```
import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl:'./header.html' ,
  styleUrl: './header.scss',
})
export class Header {
  title = 'My App is Cool'
}
```

header.html

```
<header>
    <nav>
        {{ title }}
    </nav>
</header>
```


## Parents to Child Data Pass..

- First we need to open doors means if i want to pass data from home to greet , first greet should start accepting data

greet.ts:
```
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
```
> we use input() for that ..


- in home to pass data:

> home.html : 
```
<p>
    Welcome to Wonderland
</p>
<app-greet  [greetMsg]="homeGreetMsg()"/>
```