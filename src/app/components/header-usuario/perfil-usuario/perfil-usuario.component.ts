import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
   user: User = new User()
   confirmarSenha: string
   _user: User[] =[]
   filteredUsuarios: User[]=[]
   erro: any;
   index: number;

   nome = environment.nome
   email = environment.usuario
   cpf = environment.cpfUsuario

   usuario: User = new User()
   //idUsuario: number
    
  
   constructor(
     private router: Router,
     private route: ActivatedRoute,
     private authService: AuthService
   ) { }
 
   ngOnInit(): void {
     if (environment.token == '') {
       Swal.fire({
         title: 'Você precisa estar logado!',
         icon: 'warning'        
       }
       )
       this.router.navigate(['/login']);
     }
    // this.idUsuario = this.route.snapshot.params['id']
    //  this.findUserById()
   }
 
  //  findUserById() {
  //    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: User)=>{
  //      this.usuario = resp
  //      this.usuario.senha = ''
  //    })
  //  }
  
 
   atualizar() {
     this.authService.atualizar(this.usuario).subscribe((resp: User)=>{
       this.usuario = resp
       Swal.fire({
         title: 'Usuário atualizado com sucesso!',
         icon: 'success'
     })      
       this.router.navigate(['/home-logado'])
     })
   }
  

  delete(): void{
    this.authService.deletarUsuario(this.index).pipe(first()).subscribe({next:()=>{
      alert('Conta deletada com sucesso!')
    },
      error:(error)=>{
        this.erro = error;
        console.log(this.erro)
      }
    })
  }

  pegarId(id: number){
    this.index = id;
  }
}
