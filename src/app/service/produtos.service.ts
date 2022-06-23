import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

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
    return this.http.get<Produtos[]>('http://localhost:8080/produtos')

  }

<<<<<<< HEAD
  getProdutoById(id: number): Observable<Produtos> {
    return this.http.get<Produtos>(`http://localhost:8080/produtos/${id}`)
  }

  getProdutosByNome(nome: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`http://localhost:8080/produtos/nome/${nome}`)
  }

  getProdutosByCategoria(categorias: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`http://localhost:8080/produtos/categorias/${categorias}`)
  }

=======
  //adicionando o método Get por id do produto
  getProdutoById(id: number): Observable<Produtos>{
    return this.http.get<Produtos>(`http://localhost:8080/produtos/${id}`)
  }

>>>>>>> 556a4bf5848a43f0da0357420bf951e9c05ef299
  postProdutos(produtos:Produtos):Observable<Produtos>{
    return this.http.post<Produtos>('http://localhost:8080/produtos/cadastrar', produtos, this.token)
  }

  putProdutos(produtos: Produtos):Observable<Produtos>{
    return this.http.put<Produtos>('http://localhost:8080/produtos/atualizar', produtos, this.token)
  }


  deletarProduto(id: number): Observable<Produtos>{
    return this.http.delete<Produtos>(`http://localhost:8080/produtos/${id}`, this.token)
  }
}
