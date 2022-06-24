import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { DestaqueComponent } from './components/destaque/destaque.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FormsModule } from '@angular/forms';
import { HeaderUsuarioComponent } from './components/header-usuario/header-usuario.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LogadoComponent } from './logado/logado.component';
import { HomeLogadoComponent } from './logado/home-logado/home-logado.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PerfilUsuarioComponent } from './components/header-usuario/perfil-usuario/perfil-usuario.component';
import { JogosAppComponent } from './jogos-app/jogos-app.component';
import { ProdutosListaComponent } from './jogos-app/produtos-lista/produtos-lista.component';
import { ProdutosItemComponent } from './jogos-app/produtos-lista/produtos-item/produtos-item.component';
import { TodosProdutosComponent } from './jogos-app/todos-produtos/todos-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { JogosAppLogadoComponent } from './logado/jogos-app-logado/jogos-app-logado.component';
import { BlogComponent } from './blog/blog.component';





@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CarrosselComponent,
    DestaqueComponent,
    HomeComponent,
    LoginComponent,
    CadastrarComponent,
    PedidosComponent,
    HeaderUsuarioComponent,
    LogadoComponent,
    HomeLogadoComponent,
    SobreComponent,
    PerfilUsuarioComponent,
    JogosAppComponent,
    ProdutosListaComponent,
    ProdutosItemComponent,
    TodosProdutosComponent,
    ProdutosComponent,
    JogosAppLogadoComponent,
    BlogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:  LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
