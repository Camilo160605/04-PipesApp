import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

    public name : string ="Camilo";
    public gender : 'male' | 'female' = 'male';
    public invitationMap = {
      male : 'invitarlo',
      female : 'invitarla'
    }
    changeName(): void {
      this.name = 'Melissa',
      this.gender = 'female'
    }

  //i18nPlural Pipe
  public clients : string[] = ['Camilo','Eduardo','Maria','Jorge','Paola','Diego','Mateo','Juan','Pedro','Julian'];
  public clientsMap = {
     '=0' : 'No tenemos ningun cliente esperando.',
     '=1': 'Tenemos un cliente esperando.',
     '=2': 'Tenemos 2 esperando.',
     'other' : 'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clients.shift()
  }
}
