import { Component, Input, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/Produtos';

@Component({
  selector: 'app-produtos-item',
  templateUrl: './produtos-item.component.html',
  styleUrls: ['./produtos-item.component.css']
})
export class ProdutosItemComponent implements OnInit {

  @Input()
  produtos: Produtos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
