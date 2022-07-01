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
<<<<<<< HEAD
    return this.http.get<Produtos[]>(`${this.produtosURL}`)
=======
    return this.http.get<Produtos[]>('http://eccomerce-pi.herokuapp.com/produtos')
>>>>>>> 3fb33057fc119cff8f36d7d4800f9f61a49ccd91

  }

  getProdutoById(id: number): Observable<Produtos> {
<<<<<<< HEAD
    return this.http.get<Produtos>(`${this.produtosURL}/${id}`)
  }

  getProdutosByNome(nome: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.produtosURL}/nome/${nome}`)
  }

  getProdutosByCategoria(categorias: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.produtosURL}/categorias/${categorias}`)
=======
    return this.http.get<Produtos>(`http://eccomerce-pi.herokuapp.com/produtos/${id}`)
  }

  getProdutosByNome(nome: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`http://eccomerce-pi.herokuapp.com/produtos/nome/${nome}`)
  }

  getProdutosByCategoria(categorias: string): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`http://eccomerce-pi.herokuapp.com/produtos/categorias/${categorias}`)
>>>>>>> 3fb33057fc119cff8f36d7d4800f9f61a49ccd91
  }


  postProdutos(produtos:Produtos):Observable<Produtos>{
<<<<<<< HEAD
    return this.http.post<Produtos>(`${this.produtosURL}/cadastrar`, produtos, this.token)
  }

  putProdutos(produtos: Produtos):Observable<Produtos>{
    return this.http.put<Produtos>(`${this.produtosURL}/atualizar`, produtos, this.token)
=======
    return this.http.post<Produtos>('http://eccomerce-pi.herokuapp.com/produtos/cadastrar', produtos, this.token)
  }

  putProdutos(produtos: Produtos):Observable<Produtos>{
    return this.http.put<Produtos>('http://eccomerce-pi.herokuapp.com/produtos/atualizar', produtos, this.token)
>>>>>>> 3fb33057fc119cff8f36d7d4800f9f61a49ccd91
  }


  deletarProduto(id: number): Observable<Produtos>{
<<<<<<< HEAD
    return this.http.delete<Produtos>(`${this.produtosURL}/${id}`, this.token)
=======
    return this.http.delete<Produtos>(`http://eccomerce-pi.herokuapp.com/produtos/${id}`, this.token)
>>>>>>> 3fb33057fc119cff8f36d7d4800f9f61a49ccd91
  }
}
