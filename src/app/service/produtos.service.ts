import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {


  constructor(private http:HttpClient) { }

 
  deletarProduto(id: number): Observable<Produtos>{
    return this.http.delete<Produtos>(`${environment.apiUrl}/produtos/${id}`)
  }

  getAllProdutos():Observable<Produtos[]>{
    return this.http.get<Produtos[]>('http://localhost:8080/produtos')

  }

  //adicionando o método Get por id do produto
  getProdutoById(id: number): Observable<Produtos>{
    return this.http.get<Produtos>(`http://localhost:8080/produtos/${id}`)
  }

  postProdutos(produtos:Produtos):Observable<Produtos>{
    return this.http.post<Produtos>('http://localhost:8080/produtos/cadastrar', produtos)
  }


}
