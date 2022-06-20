import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos:Produtos = new Produtos

  constructor(
    private router: Router,
    private produtosService:ProdutosService    
  ) { }

  ngOnInit() {
    if(environment.token== ''){      
      this.router.navigate(['/login']),
      this.router.navigate(['/produtos'])
    }
  }

  cadastrarProduto(){
    this.produtosService.postProdutos(this.produtos).subscribe((resp: Produtos)=>{
      this.produtos = resp
      alert('Produto cadastrado com sucesso!')
      this.produtos = new Produtos()
    })
  }
}
