import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeEfetivacao'
})
export class EfetivacaoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let contratacao = 'Tempo integral';

    if(value === false){
      contratacao = 'Menor aprendiz';
    }

    return contratacao;
  }

}
