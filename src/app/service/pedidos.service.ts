import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pedidos } from '../model/Pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token),
  };

  refreshToken(){
    this.token={
      headers: new HttpHeaders().set("Authorization", environment.token),
    };
}

  getCompras(id: number): Observable<Pedidos>{
    return this.http.get<Pedidos>(`https://localholst:8080/pedidos/${id}`, this.token)
  }

  postCompras(pedidos: Pedidos): Observable<Pedidos>{
    return this.http.post<Pedidos>("https://localholst:8080/pedidos", pedidos ,this.token)
  }

  putCompras(pedidos: Pedidos): Observable<Pedidos>{
    return this.http.put<Pedidos>("https://localholst:8080/pedidos", pedidos ,this.token)
  }

  deleteCompras(id: number): Observable<Pedidos>{
    return this.http.delete<Pedidos>(`https://localholst:8080/pedidos/${id}`, this.token)
  }
}