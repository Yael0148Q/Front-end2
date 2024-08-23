import { from } from 'rxjs';
import { Alumno } from './../../models/alumno';
import { AlumnoService } from './../../services/alumno.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor(public alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(){
    this.alumnoService.getAlumnos().subscribe(
      res => {
        this.alumnoService.alumnos= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createAlumno(form:NgForm){
     //Creando
    this.alumnoService.createAlumno(form.value).subscribe(
      res=> {
        this.getAlumnos();
        form.reset();
      },
      err=> console.log(err)
    )
  }     

  updateAlumno(form:NgForm){
      alert('actualizando'); 
      this.alumnoService.editAlumno(form.value).subscribe(
       res=> console.log(res),
       err=> console.log(err)
      );
 }    


  deleteAlumno(numcontrol:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando'+ numcontrol);
     if(resp){
       this.alumnoService.deleteAlumno(numcontrol).subscribe(
        (res)=>{
          this.getAlumnos();
        },
        (err)=> console.log(err)
       );
     }
  }

  editAlumno(alumno:Alumno){
    this.alumnoService.alumno= alumno;
  }

  formReset(form:NgForm){
    this.alumnoService.alumno=form.value;
    form.reset();
  }
}

