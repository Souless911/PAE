import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticias-details',
  templateUrl: './noticias-details.component.html',
  styleUrls: ['./noticias-details.component.scss']
})
export class NoticiasDetailsComponent implements OnInit, OnChanges {

  @Input() noticia:any={}
  @Output() onClear:EventEmitter<void>=new EventEmitter();

  

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
     // console.log('llegaron cambios:', changes); 
      
  }
  clearNoticia(){
    this.onClear.emit();
  }
}
