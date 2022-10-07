import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias-details-page',
  templateUrl: './noticias-details-page.component.html',
  styleUrls: ['./noticias-details-page.component.scss']
})
export class NoticiasDetailsPageComponent implements OnInit {

  noticia: Noticia = {
    title: '',
    description: '',
    url: ''
  }
  titulo: string = '';

  constructor(
    private noticiaService: NoticiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((qparams) => {
      this.titulo = qparams['titulo'];
    });
    this.noticia = this.noticiaService.getCurrentNoticia();

    if (this.titulo !== this.noticia.title) {
      this.router.navigate(['..'], {
        relativeTo: this.activatedRoute,
      });
    }
  }
  regresarTitulo(){
    this.router.navigate(['..'],{
      relativeTo:this.activatedRoute,
      queryParams:{ new:sessionStorage.getItem('search')},
      queryParamsHandling:'merge'
    });

  }
}
