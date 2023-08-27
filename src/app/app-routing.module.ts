import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
    path: '',
		loadChildren: () =>
    import('./pages/pages.module').then((m) => m.PagesModule),
	},
  {
    path: 'produtos',
    loadChildren: () =>
      import('./features/produto/produto.module').then((m) => m.ProdutoModule),
  },
  { path: '**', redirectTo: '' } // qualquer outra rota redireciona para home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
