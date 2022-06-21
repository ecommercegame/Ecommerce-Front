import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  produtos:any;
  //_produtos: Produtos[]
  produtosService:ProdutosService;


  constructor(produtosService:ProdutosService) {
    this.produtosService = produtosService
  }

  ngOnInit() {

    this.produtos = this.produtosService.getAllProdutos().subscribe((data => {
      this.produtos = data;
      //console.log(data)
      console.log(this.produtos)
    }))
  }

}
