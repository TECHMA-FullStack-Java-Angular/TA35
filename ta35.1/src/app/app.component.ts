import { Component,  Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ta35.1';
  name = 'Alta Cliente';

  // Define public properties to store form input values
  public nombre: string = '';
  public cif: string = '';
  public direccion: string = '';
  public grupo: number = 0;

  @Output() formValues: any[] = []; // Cambiar a un array

  guardar() {
    console.log('Guardar método ejecutado');
    let values = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo,
    };
    console.log(values);
    this.formValues.push(values); // Agregar el objeto values al array formValues
    this.resetear();
  }

  resetear() {
    this.nombre = '';
    this.cif = '';
    this.direccion = '';
    this.grupo = 0;
  }
}


