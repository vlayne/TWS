import { Component } from '@angular/core';

/**
 * Generated class for the CritereComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'critere',
  templateUrl: 'critere.html'
})
export class CritereComponent {

  text: string;

  constructor() {
    console.log('Hello CritereComponent Component');
    this.text = 'Hello World';
  }

}
