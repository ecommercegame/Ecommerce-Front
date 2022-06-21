import { first } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  public produtos: Produtos[];  
  produto = new Produtos();
  produtoSalvo = new Produtos();
  
  @ViewChild('cadastrar') cadastrar: any;
  @ViewChild('consultar') consultar: any;
  @ViewChild('atualizar') atualizar: any;
  @ViewChild('deletar') deletar: any;

  constructor(private produtosService: ProdutosService) { }

  refresh(): void{
    window.location.reload();
  }


   ngOnInit(): void {
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.produtos=resp;
    })
  }

  cadastrarProduto(): void {
    this.produtosService.postProdutos(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp
      alert('Usuário cadastrado com sucesso !!')
    })
  }

  delete():void{}
 
  limparFormCadastrar(): void {
    this.cadastrar.nativeElement.value = '';
  }

  limparFormConsultar(): void {
    this.consultar.nativeElement.value = '';
  }

  limparFormAtualizar(): void {
    this.atualizar.nativeElement.value = '';
  }

  
  limparFormDeletar(): void {
    this.deletar.nativeElement.value = '';
  }
}
