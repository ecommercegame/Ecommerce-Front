import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.css']
})
export class HeaderUsuarioComponent implements OnInit {
  nomeProduto: string;
  
  nome=environment.nome
  usuario= environment.usuario

  constructor(
    private router:Router,
    public auth: AuthService
  ) { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/home'])
    environment.token=''
    environment.nome=''
    environment.cpfUsuario=''
    environment.idUsuario=0
  }

  Enviar() {

    Swal.fire(
      'Enviado!',
      'Seu e-mail foi enviado com sucesso!',
      'success'
    )

  }

}
