import { Injectable } from '@angular/core';
import { P } from '../interfaces/p';
@Injectable({
  providedIn: 'root'
})
export class PsService {
  ps: P[] = [
    {nomb: 'Cristhian ', bio: 'tengo 20 años', hobbies: 'comer, jugar'},
    {nomb: 'Camila ', bio: 'tengo 19 años', hobbies: 'estudiar, entrenar'},
  ];

  getPs():P[]{
    return this.ps;
  }
  getPPorNomb(nomb:string):P|undefined{
    for (const p of this.ps) {
      if (p.nomb == nomb)
        return p;
    }
    return undefined;
  }

  updateP(pnuevo:P){
    for (const p of this.ps) {
      if (p.nomb == pnuevo.nomb){
        p.nomb = pnuevo.nomb;
        p.bio = pnuevo.bio;
        p.hobbies = pnuevo.hobbies;
      };
    };
  }
  constructor() { }
}
