import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private putUrl: String = 'http://localhost:8080/usuarios/cadastrar';
  private userUrl: string = 'http://localhost:8080/usuarios'
 
  constructor(
    private http: HttpClient

  ) { }

  buscarTodos(): Observable<UserLogin[]>{
    return this.http.get<UserLogin[]>(this.userUrl)
  }

  // buscar(id: number): Observable<UserLogin>{
  //   return this.http.get<UserLogin>(`${this.userUrl}/${id}`)
  // }

  login(userLogin: UserLogin): Observable<UserLogin> {

    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)

  }

  cadastrar(user: User): Observable<User> {
    
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)
  } 

  atualizar(user: UserLogin): Observable<UserLogin> {
    return this.http.put<UserLogin>(`${this.putUrl}/${user.idUsuario}`, user)
  }
 
  
  
  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  deleteById(id: number): Observable<any>{
    return this.http.delete<any>(`${this.userUrl}/${id}`)
  }

}

