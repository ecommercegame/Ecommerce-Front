import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ComponentsComponent } from './components/components.component';
import { PerfilUsuarioComponent } from './components/header-usuario/perfil-usuario/perfil-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLogadoComponent } from './logado/home-logado/home-logado.component';
import { LogadoComponent } from './logado/logado.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'home-logado', component: HomeLogadoComponent},
  {path: 'components', component: ComponentsComponent},
  {path: 'logado', component: LogadoComponent},
  {path: 'perfil-usuario', component: PerfilUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
