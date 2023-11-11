import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent{

  menuItems: MenuItem[] | undefined;

  ngOnInit() {
      this.menuItems = [
        {
          label: 'Pipes en Angular',
          icon: 'pi pi-desktop',
          items: [{
            label: 'Textos y Fechas',
            icon : 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon : 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label : 'No Comunes',
            icon : 'pi pi-globe',
            routerLink:'uncommon'
          }

          ]
        },
        {
          label : 'Pipes Personalizados',
          icon : 'pi pi-cog',
          items : [
            {
              label : 'Otro elemento',
              icon : 'pi pi-cog'
            }
          ]
        }
      ];
  }

}

