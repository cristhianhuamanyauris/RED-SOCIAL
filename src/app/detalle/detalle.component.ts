import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../services/cursos.service';
import { Curso } from '../interfaces/curso';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  codigo: string | null = null;
  curso: Curso | undefined;
  
  constructor(
    public route:ActivatedRoute,
    public cursosService: CursosService,
  ){

  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.codigo = params.get('codigo') ?? '';
      this.curso = this.cursosService.getCursoPorCodigo(this.codigo);
    });
  }
}
