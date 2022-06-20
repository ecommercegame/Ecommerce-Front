import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
   user: UserLogin = new UserLogin
   confirmarSenha: string
   _user:UserLogin[]= []
   filteredUsuarios: UserLogin[]=[]

   nome = environment.nome
   usuario = environment.usuario
   cpf = environment.cpfUsuario

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscartodos(): void{
    this.auth.buscarTodos().subscribe({
      next: user => {
        this._user = user;
        this.filteredUsuarios = this._user;
      },
      error:err => console.log('Eroor', err)
    })
  }
 

  atualizar(): void{      
    this.auth.atualizar(this.user).subscribe({
        next: user => console.log('Salvo com sucesso', user),
        error: err => console.log('Error', err)
    });
    
  }

  deleteById(idUsuario: number): void { 
    this.auth.deleteById(idUsuario).subscribe({
        next: () => { 
            alert('Perfil deletado');           
        },
        error: err => console.log('Error', err)
    })
  }

 

}
