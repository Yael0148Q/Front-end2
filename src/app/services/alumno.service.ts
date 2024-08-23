import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  URL_API= 'http://localhost:3000/alumnos/'; 
  public alumno: Alumno=
  {numcontrol:'' ,    
    nombre: '',
    apellidop: '',
    apellidom: '',
    grupo: '',
    carrera: '',
    numcelular: '',
    correoe: ''};

  alumnos: Alumno[]=[];

  constructor(private http: HttpClient){}     //<----------
  
  getAlumnos(){
    return this.http.get<Alumno[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createAlumno(alumno:Alumno){
    // const id= this.empleados[this.empleados.length-1].id+1;
    // empleado.id= id;
    // console.log(id);
    // this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,alumno);
  }

  deleteAlumno( numcontrol:any){
    // const pos = this.empleados.findIndex(
    //   item => item.id===id);
    //   console.log(pos);
    //   this.empleados.splice(pos,1);
     //return this.empleados;
     return this.http.delete(this.URL_API+numcontrol);
      
    }

    editAlumno(alumno:Alumno){
      // const pos= this.empleados.findIndex(
      //   item => item.id===empleado.id);
      //     console.log(pos);
      //     this.empleados[pos]=empleado;
      //     return this.empleados;
      return this.http.put(this.URL_API+alumno.numcontrol,alumno);
    }
}