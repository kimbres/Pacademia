import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { PlanosComponent } from './../planos/planos.component';
import { CadastroClientesComponent } from './../cadastro-clientes/cadastro-clientes.component';
import { AtividadesComponent } from '../atividades/atividades.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'planos', component: PlanosComponent },
  {path: 'atividades', component: AtividadesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
