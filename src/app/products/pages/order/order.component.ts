import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase : boolean = false;
  public heroes : Hero[]=[
    {
      name : "SUPERMAN",
      canFly : true,
      color: Color.blue
    },
    {
      name : "BATMAN",
      canFly : false,
      color: Color.black
    },
    {
      name : "ROBIN",
      canFly : false,
      color: Color.red
    },
    {
      name : "DAREDEVIL",
      canFly : false,
      color: Color.red
    },
    {
      name : "LITERNA VERDE",
      canFly : true,
      color: Color.green
    },
  ]

  toggleUperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }



}
