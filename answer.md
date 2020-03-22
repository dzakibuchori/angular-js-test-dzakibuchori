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
5. How to handling input in Angular ?
6. How to make class html tag receive property ?
7. How to make conditional rendering in Angular ?
8. How we can render list in Angular ?
9. What is RxJS ?
