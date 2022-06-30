import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtosURL: string = 'http://localhost:8080/produtos'

  constructor(private http:HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllProdutos():Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.produtosURL}`)

  }

  getProdutoById(id: number): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.produtosURL}/${id}`)
  }

  getProdutosByNome(nome: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.produtosURL}/nome/${nome}`)
  }

  getProdutosByCategoria(categorias: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.produtosURL}/categorias/${categorias}`)
  }


  postProdutos(produtos:Produtos):Observable<Produtos>{
    return this.http.post<Produtos>(`${this.produtosURL}/cadastrar`, produtos, this.token)
  }

  putProdutos(produtos: Produtos):Observable<Produtos>{
    return this.http.put<Produtos>(`${this.produtosURL}/atualizar`, produtos, this.token)
  }


  deletarProduto(id: number): Observable<Produtos>{
    return this.http.delete<Produtos>(`${this.produtosURL}/${id}`, this.token)
  }
}
