import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
