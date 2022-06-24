import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  
  produtos: Produtos = new Produtos()
  idProduto: number

  constructor(
    private produtosService : ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if (environment.token == ''){
      this.router.navigate(['/login'])
      alert('Sua Sessão expirou! Faça login Novamente')
    }
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }


  findByIdProduto(id: number){
    this.produtosService.getProdutoById(id).subscribe((resp: Produtos)=>{
      this.produtos = resp
    })
  }
  apagar(){
    this.produtosService.deletarProduto(this.idProduto).subscribe(()=>{
      alert('Produto deletado com sucesso')
      this.router.navigate(['/jogos-cadastro'])
    })
  }
}
