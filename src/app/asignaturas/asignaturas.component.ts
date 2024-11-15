import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Curso } from '../interfaces/curso';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './asignaturas.component.html',
  styleUrl: './asignaturas.component.css'
})

export class AsignaturasComponent {
  cursos?:Curso[];  //cursos:Curso[] = []

  constructor(public cursosService:CursosService){

  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos(); 
  }
}
