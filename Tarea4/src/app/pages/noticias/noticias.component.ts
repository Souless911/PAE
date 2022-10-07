import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticias: any=[];
  cargando: boolean =false;

  zelda:string='http://google.com';
  search:string='';
  lastSearch:string='';
  current:any={title:'Placeholder'}
  params:any='';
  
  lsp:string='';
  constructor(private noticiasService:NoticiaService, private router:Router, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit():void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.lsp=params['new'];
    })
    if(this.lsp !== undefined){
      this.search=this.lsp;
      this.buscar();
    }
  }
  
  buscar(e?:any):void{

    this.cargando=true;
    this.noticiasService.getNoticias(this.search).subscribe({
      next:(Response)=>{

        this.lastSearch= this.search;
        this.noticias=Response.articles.map((item:any)=>{
         
          return item;
        })
        this.noticias= Response.articles;
        this.cargando=false;
      },

      error:(err)=>{
        console.log('Error',err);
      }
   
    });
    sessionStorage.setItem("search", this.search);
    this.params= sessionStorage.getItem("search");
    this.setQueryParams();
  }
  setQueryParams(){
    this.router.navigate([],{
      relativeTo:this.activatedRoute,
      queryParams:{new:this.search},
      queryParamsHandling:'merge'
    });
  }

  actualizarFavoritos(noticia:any){
  }
  selectNoticia(noticia:any){
    this.current=noticia;
    this.noticiasService.setCurrentNoticia(noticia);
    
  }
  clearCurrent(){
    this.current={};
  }
}
