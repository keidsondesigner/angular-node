import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuard } from 'src/app/core/utils/auth.guard';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  { path: 'lista-produtos', component: ListagemComponent, canActivate: [AuthGuard]},
  { path: 'novo-produto', component: CadastroProdutoComponent, canActivate: [AuthGuard]},
  { path: 'editar-produto/:id', component: CadastroComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
