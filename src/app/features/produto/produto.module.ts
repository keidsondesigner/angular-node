import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SexoPipe } from 'src/app/pipes/sexo.pipe';
import { EfetivacaoPipe } from 'src/app/pipes/efetivacao.pipe';


@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    AppMaterialModule
  ]
})
export class ProdutoModule { }
