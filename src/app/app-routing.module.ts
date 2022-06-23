import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ComponentsComponent } from './components/components.component';
import { PerfilUsuarioComponent } from './components/header-usuario/perfil-usuario/perfil-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { JogosAppComponent } from './jogos-app/jogos-app.component';
import { HomeLogadoComponent } from './logado/home-logado/home-logado.component';
import { JogosAppLogadoComponent } from './logado/jogos-app-logado/jogos-app-logado.component';
import { LogadoComponent } from './logado/logado.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'home-logado', component: HomeLogadoComponent},
  {path: 'components', component: ComponentsComponent},
  {path: 'logado', component: LogadoComponent},
  {path: 'perfil-usuario', component: PerfilUsuarioComponent},
  {path: 'jogos-cadastro', component: ProdutosComponent },
  {path: 'jogos-app', component: JogosAppComponent},
  {path: 'jogos-app-logado', component: JogosAppLogadoComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'pedidos', component: PedidosComponent} //adicionado rota pedidos

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
