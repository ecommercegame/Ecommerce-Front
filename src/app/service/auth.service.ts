import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token),
  };

  refreshToken(){
    this.token={
      headers: new HttpHeaders().set("Authorization", environment.token),
    };
}

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

  atualizar(user: User): Observable<User> {
    return this.http.put<User>('http://localhost:8080/usuarios/atualizar/', user, this.token)
  }
 
  getByIdUsuario(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`, this.token)
  }
  
  deleteById(id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/usuarios/${id}`)
  }

  
  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }


  userId() {
    let id: number = 0
    if (environment.idUsuario != 0){
      id = environment.idUsuario
    }
    return id
  }

  // admin(){
  //   let ok: boolean = false
  //   if(environment.tipo == 'adm'){
  //     ok = true
  //   }
  //   return ok
  // }

 
}

