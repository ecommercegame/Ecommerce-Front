import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.component.html',
  styleUrls: ['./home-logado.component.css']
})
export class HomeLogadoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }


  ngOnInit(){
    if(environment.token== ''){      
      this.router.navigate(['/home'])
    }
  }

}
