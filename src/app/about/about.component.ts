import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


// component metadata
@Component({   //component decorator
  // standalone:true,
  selector: 'app-about',
  templateUrl: './about.component.html',
//   template:`
//   <div class="p-3 m-4 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
//      Hello, From About Component
//   </div>
//   <ol>
//   <li>This is a list item.</li>
//   <li>And another one.</li>
//   <li>But they're displayed inline.</li>
// </ol>
// `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit ,OnChanges {
  
  @Input() someInput: string = '';
  
  constructor(){
   /* 
   * Called first when reload component
     ! (default method executed when create instance from class ) 
    TODO: Dependency Injection API (DI)
   */
   console.log('About Component From Constructor')
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('About Component From ngOnChanges', changes);
  }
  ngOnInit(): void {
    /* 
    ! life cycle hook called by Angular to indicate that Angular is done creating the component
    * Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor.
    * The constructor should only be used to initialize class members but shouldn't do actual "work". So you should use constructor() to setup Dependency Injection and not much else. 
    * ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
    TODO: Called after the constructor and after the first ngOnChanges() call 
    */
    console.log('About Component From ngOnInit')
  }




  
}
