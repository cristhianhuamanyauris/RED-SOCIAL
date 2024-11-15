import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../services/cursos.service';
import { Curso } from '../interfaces/curso';
import { P } from '../interfaces/p';
import { PsService } from '../services/ps.service';
@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  nomb: string | null = null;
  p: P | undefined;
  
  constructor(
    public route:ActivatedRoute,
    public psService: PsService,
  ){

  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.nomb = params.get('nomb') ?? '';
      this.p = this.psService.getPPorNomb(this.nomb);
    });
  }
}
