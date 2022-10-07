import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from 'src/environments/environment';
import { Noticia } from 'src/app/shared/interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private noticia:Noticia={
    title:'',
    description:'',
    url:'',

  };

  constructor(private http:HttpClient){

  }
  getNoticias(q:string): Observable<any>{
    const url=`${environment.apiUrl}everything?q=${q}&sortBy=publishedAt&apiKey=${environment.apiKey}`;
    return this.http.get(url);
  }
  setCurrentNoticia(noticia:Noticia){
    this.noticia=noticia;
    localStorage.setItem('noticia',JSON.stringify(noticia));
  }
  getCurrentNoticia():Noticia{
    if(!this.noticia.title){
      const news=localStorage.getItem('noticia')||"{title:'',url:'',description:''}";
      this.noticia=JSON.parse(news);
    }
    return this.noticia;
  }

}
