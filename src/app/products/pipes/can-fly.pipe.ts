import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFlyCase'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): 'Puede Volar' |  'No puede Volar' {
        return value  ? 'Puede Volar' : 'No puede Volar';
    }
}