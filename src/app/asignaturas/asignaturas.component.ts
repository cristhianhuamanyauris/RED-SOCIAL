import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Curso } from '../interfaces/curso';
import { RouterLink } from '@angular/router';
import { P } from '../interfaces/p';
import { PsService } from '../services/ps.service';
@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './asignaturas.component.html',
  styleUrl: './asignaturas.component.css'
})

export class AsignaturasComponent {
  ps?:P[];  //cursos:Curso[] = []

  constructor(public psService:PsService){

  }

  ngOnInit(){
    this.ps = this.psService.getPs(); 
  }
}
