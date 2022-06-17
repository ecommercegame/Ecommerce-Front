import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  Enviar() {
  
    Swal.fire(
      'Enviado!',
      'Seu e-mail foi enviado com sucesso!',
      'success'
    )      
    
  }
}
