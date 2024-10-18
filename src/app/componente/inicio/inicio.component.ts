import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
formularioForm;
constructor(private FormBuilder: FormBuilder){
  this.formularioForm = this.FormBuilder.group({
    nombre:'',
    apellido:''
  });
}
ngOnInit(){
  console.log("ejecutando el ngOnInit")
}
enviarDatos(){
  let datos_formulario = this.formularioForm.value;
  console.log(this.formularioForm.value)
}
}

