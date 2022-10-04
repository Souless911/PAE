import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-noticiasph',
  templateUrl: './noticiasph.component.html',
  styleUrls: ['./noticiasph.component.scss']
})
export class NoticiasphComponent implements OnInit {
  @Input() noticia:any={}

  @Output() nombre= new EventEmitter<void>();
  @Input() current:any={};

  constructor() { }

  ngOnInit(): void {
  }
  clicknews(current:any){
    console.log("entre");
    this.nombre.emit(current);

  }

}
