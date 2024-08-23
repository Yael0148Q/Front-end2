import { Justificante } from './../../models/justificante';
import { JustificanteService } from './../../services/justificante.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-justificante',
  templateUrl: './justificante.component.html',
  styleUrls: ['./justificante.component.css']
})
export class JustificanteComponent implements OnInit {
alumnoService: any;

  constructor(public justificanteService:JustificanteService) { }

  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getJustificantes();
  }

  getJustificantes(){
    this.justificanteService.getJustificantes().subscribe(
      res => {
        this.justificanteService.justificantes= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createJustificante(form:NgForm){
     if(form.value.folio){
       alert('actualizando'); 
       this.justificanteService.editJustificante(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
       );
     }else{//Creando
    this.justificanteService.createJustificante(form.value).subscribe(
      res=> {
        this.getJustificantes();
        form.reset();
      },
      err=> console.log(err)
    )}
  }     

  updateJustificante(form:NgForm){
     if(form.value.folio){
       alert('actualizando'); 
       this.justificanteService.editJustificante(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
       );
     }else{//Creando
    this.justificanteService.createJustificante(form.value).subscribe(
      res=> {
        this.getJustificantes();
        form.reset();
      },
      err=> console.log(err)
    )}
  } 

  deleteJustificante(folio:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando'+ folio);
     if(resp){
       this.justificanteService.deleteJustificante(folio).subscribe(
        (res)=>{
          this.getJustificantes();
        },
        (err)=> console.log(err)
       );
     }
  }

  editJustificante(justificante:Justificante){
    this.justificanteService.justificante= justificante;
  }

  formReset(form:NgForm){
    this.justificanteService.justificante=form.value;
    form.reset();
  }
}
