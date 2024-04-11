import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { consultaCursosReducer, consultaCursosStateFeatureKey } from 'src/app/core/providers/consulta-cursos/consulta-cursos.reducer';
import { ConsultaCursosEffects } from 'src/app/core/providers/consulta-cursos/consulta-cursos.effects';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { CustomDialogComponent } from 'src/app/components/custom-dialog/custom-dialog.component';


@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent,
    AdicionarProdutoComponent,
    CustomDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    StoreModule.forFeature(consultaCursosStateFeatureKey, consultaCursosReducer ),
    EffectsModule.forFeature([
      ConsultaCursosEffects
    ]),
    ReactiveFormsModule,
    NgxSkeletonLoaderModule
  ]
})
export class ProdutoModule { }
