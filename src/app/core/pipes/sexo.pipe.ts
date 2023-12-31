import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexoPipe'
})
export class SexoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let sexo = 'Maculino';

    if(value === 'f'){
      sexo = 'Feminino';
    }

    return sexo;
  }

}
