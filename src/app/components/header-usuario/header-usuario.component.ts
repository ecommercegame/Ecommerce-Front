import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.css']
})
export class HeaderUsuarioComponent implements OnInit {

  nome= environment.nome
  constructor(
    private router:Router
  ) { }

  ngOnInit(){
    if(environment.token== ''){      
      this.router.navigate(['/home'])
    }
  }

  sair(){
    this.router.navigate(['/home'])
    environment.token=''
    environment.nome=''
    environment.cpfUsuario=''
    environment.idUsuario=0
  }

}
