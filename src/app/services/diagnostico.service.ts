import { Injectable } from '@angular/core';
import { Diagnostico } from '../models/diagnostico';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {
  URL_API= 'http://localhost:3000/diagnosticos/'; 
  public diagnostico: Diagnostico=
  {folio:'',nombrep:'',fechad: new Date(''),responsable:'',numcontrol:'', diagnosticop:''};

  diagnosticos: Diagnostico[]=[];

  constructor(private http: HttpClient){}     //<----------
  
  getDiagnosticos(){
    return this.http.get<Diagnostico[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createDiagnostico(diagnostico:Diagnostico){
    // const id= this.empleados[this.empleados.length-1].id+1;
    // empleado.id= id;
    // console.log(id);
    // this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,diagnostico);
  }

  deleteDiagnostico(folio:any){
    // const pos = this.empleados.findIndex(
    //   item => item.id===id);
    //   console.log(pos);
    //   this.empleados.splice(pos,1);
     //return this.empleados;
     return this.http.delete(this.URL_API+folio);
      
    }

    editDiagnosico(diagnostico:Diagnostico){
      // const pos= this.empleados.findIndex(
      //   item => item.id===empleado.id);
      //     console.log(pos);
      //     this.empleados[pos]=empleado;
      //     return this.empleados;
      return this.http.put(this.URL_API+diagnostico.folio,diagnostico);
    }
}

