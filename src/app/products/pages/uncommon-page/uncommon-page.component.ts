import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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
     '==0' : 'No tenemos ningun cliente esperando.',
     '==1': 'Tenemos un cliente esperando.',
     '==2': 'Tenemos 2 esperando.',
     'other' : 'tenemos # clientes esperando.'
  }

  deleteClient():void{
    this.clients.shift()
  }

  //KeyValue Pipe
  public person = {
    name: 'Camilo',
    age: '18',
    adress: 'Ottawa, Canada'
  } 

    //Async Pipe
  
  public myObservableTimer : Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap: ', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Otro nombre'
    }, 3500);
  })

}
