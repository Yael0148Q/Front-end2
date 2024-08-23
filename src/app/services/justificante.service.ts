import { Justificante } from './../models/justificante';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<---

@Injectable({
  providedIn: 'root'
})
export class JustificanteService {
  URL_API= 'http://192.168.6.111:3000/justificantes/'; //<-----
  public justificante:Justificante=
  { id_j:'',  
    edad: 0,
    sexo: '',
    folio: '',
    justificantee:''};

  justificantes: Justificante[]=[];

  //constructor() { }
  constructor(private http: HttpClient){}     //<----------
  
  getJustificantes(){
    return this.http.get<Justificante[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createJustificante(justificante:Justificante){
    // const id= this.empleados[this.empleados.length-1].id+1;
    // empleado.id= id;
    // console.log(id);
    // this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,justificante);
  }

  deleteJustificante(id_j:any){
    // const pos = this.empleados.findIndex(
    //   item => item.id===id);
    //   console.log(pos);
    //   this.empleados.splice(pos,1);
     //return this.empleados;
     return this.http.delete(this.URL_API+id_j);
      
    }

    editJustificante(justificante:Justificante){
      // const pos= this.empleados.findIndex(
      //   item => item.id===empleado.id);
      //     console.log(pos);
      //     this.empleados[pos]=empleado;
      //     return this.empleados;
      return this.http.put(this.URL_API+justificante.id_j,justificante);
    }
}
