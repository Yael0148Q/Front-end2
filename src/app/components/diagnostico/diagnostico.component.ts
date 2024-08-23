import { Diagnostico } from './../../models/diagnostico';
import { DiagnosticoService } from './../../services/diagnostico.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoComponent implements OnInit {

  constructor(public diagnosticoService:DiagnosticoService) { }

  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getDiagnosticos();
  }

  getDiagnosticos(){
    this.diagnosticoService.getDiagnosticos().subscribe(
      res => {
        this.diagnosticoService.diagnosticos= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createDiagnostico(form:NgForm){
     if(form.value.folio){
       alert('actualizando'); 
       this.diagnosticoService.editDiagnosico(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
       );
     }else{//Creando
    this.diagnosticoService.createDiagnostico(form.value).subscribe(
      res=> {
        this.getDiagnosticos();
        form.reset();
      },
      err=> console.log(err)
    )}
  }     

  updateDiagnostico(form:NgForm){
     if(form.value.folio){
       alert('actualizando'); 
       this.diagnosticoService.editDiagnosico(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
       );
     }else{//Creando
    this.diagnosticoService.createDiagnostico(form.value).subscribe(
      res=> {
        this.getDiagnosticos();
        form.reset();
      },
      err=> console.log(err)
    )}
  } 

  deleteDiagnostico(folio:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando'+ folio);
     if(resp){
       this.diagnosticoService.deleteDiagnostico(folio).subscribe(
        (res)=>{
          this.getDiagnosticos();
        },
        (err)=> console.log(err)
       );
     }
  }

  editDiagnostico(diagnostico:Diagnostico){
    this.diagnosticoService.diagnostico= diagnostico;
  }

  formReset(form:NgForm){
    this.diagnosticoService.diagnostico=form.value;
    form.reset();
  }
}
