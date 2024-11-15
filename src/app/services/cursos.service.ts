import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos:Curso[] = [
    {codigo: 'IIAD31', nombre: 'Algoritmos', nota:9},
    {codigo: 'IIAD45', nombre: 'Matematica', nota:13},
    {codigo: 'IIAD67', nombre: 'Base de datos', nota:16},
  ];
  constructor() { }

  getCursos():Curso[]{
    return this.cursos;
  }

  getCursoPorCodigo(codigo:string):Curso|undefined{
    for (const curso of this.cursos) {
      if (curso.codigo == codigo)
        return curso;
    }
    return undefined;
  }

  updateCurso(cursonuevo:Curso){
    for (const curso of this.cursos) {
      if (curso.codigo == cursonuevo.codigo){
        curso.nombre = cursonuevo.nombre;
        curso.codigo = cursonuevo.codigo;
        curso.nota = cursonuevo.nota;
      };
    };
  }
}
