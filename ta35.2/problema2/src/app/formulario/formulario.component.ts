import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  name = 'Formulario de contacto';
  formulario: FormGroup;
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  respuesta: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
      respuesta: ['', [Validators.required]]
    });
  }

  guardar() {
    if (this.formulario.valid) {
      console.log('Guardar método ejecutado');
      let values = {
        nombre: this.formulario.get('nombre')?.value,
        email: this.formulario.get('email')?.value,
        mensaje: this.formulario.get('mensaje')?.value,
        respuesta: this.formulario.get('respuesta')?.value,
      };
      console.log(values);
      this.resetear();
    }
  }
  

  resetear() {
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    this.respuesta = 0;
  }
}

