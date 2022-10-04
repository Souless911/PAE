import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noticiasdetails',
  templateUrl: './noticiasdetails.component.html',
  styleUrls: ['./noticiasdetails.component.scss']
})
export class NoticiasDetailsComponent implements OnInit, OnChanges {

  @Input() noticia:any={}
  @Output() onClear:EventEmitter<void>=new EventEmitter();

  

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('llegaron cambios:', changes); 
      
  }
  clearNoticia(){
    this.onClear.emit();
  }
}
