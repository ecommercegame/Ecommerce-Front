import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Pedidos } from '../model/Pedidos';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  listaProdutos: Produtos[]
  pedidos: Pedidos = new Pedidos
  valorTotal = this.pedidos.valorTotal

  constructor(
    private router: Router,
    private produtoService: ProdutosService
  ) { }

  ngOnInit(){

    if(environment.token = ''){
      this.router.navigate(['/entrar'])
    }

  }

}
