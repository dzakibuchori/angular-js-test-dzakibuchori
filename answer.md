## Answer for each question, right away after the question

1. What do you know about Angular ?

    I just knew it as MVC for frontend before. But after some reading and learning, I knew that angular is good for making SPAs, the framework is using modular approach and it has reusable code system. for testing it also has unit testing.

2. How to define data in Angular ?
  
    we define data in component class in typescript file
    
3. In Angular What lifecycle you can run after instance created ?

    lifecycle of component in angular separated at 8 stages after the `constructor` begin, each stage run after another. the stages divided into two different phases one is linked to the component itself and another one linked to the children of it.
    
    8 stages are :
    - ngOnChanges
    - ngOnInit
    - ngDoCheck
        
        the following for linked to the children :
        - ngAfterContentInit
        - ngAfterContentChecked
        - ngAfterViewInit
        - ngAfterViewChecked
    - ngOnDestroy

4. How to trigger an event and handling it in Angular ?

    to trigger an event for example event `click`, we put directive `event binding` at the html tag, for example
    ```html
    <button (click)="onClick()">Show Me!</button>
    ```

    and to handle the trigger we put the `method` in angular component class in typescript file

    ```typescript
    export class AppComponent {
      onClick() {
        console.log('Here you go!');
      }
    }
    ```
5. How to handling input in Angular ?

    to handle input in Angular. First, we need to import `Input` from `@angular/ core`, 
    ```typescript
    import { Input } from '@angular/core';
    ```
    then, we can use `@input()` decorator in component class
    ```typescript
    @input() student;
    ```
6. How to make class html tag receive property ?
    
    using `interpolation {{...}}`, for example :
    ```html
    <p>{{student.name}}</p>
    ```

7. How to make conditional rendering in Angular ?

    using structural directive `*ngIf`, for example
    ```html
    <p *ngIf="student.age">
        Age : {{student.age}}
    </p>
    ```

8. How we can render list in Angular ?

    using structural directive `*ngFor`, for example
    ```html
    <div *ngFor="let student of students">
        <h3>{{student.name}}</h3>
    </div>
    ```

9. What is RxJS ?

    stand for Reactive Extensions for JavaScript is a library for reactive programming, it has observable creation functions which is useful for asynchronous code.
