import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {


  private url = 'https://localhost:8080/produtos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http:HttpClient) { }



  getAllProdutos():Observable<Produtos[]>{
    return this.http.get<Produtos[]>('http://localhost:8080/produtos')

  }

  postProdutos(produtos:Produtos):Observable<Produtos>{
    return this.http.post<Produtos>('http://localhost:8080/produtos/cadastrar',produtos)
  }
}
