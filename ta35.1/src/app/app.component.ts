import { Component, EventEmitter, Output } from '@angular/core';

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
  

  @Output() formValues: EventEmitter<any> = new EventEmitter();

  guardar() {
    let values = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo,
    };

    this.formValues.emit(values);

    this.resetear();

  }

  resetear(){

      this.nombre = '';
      this.cif = '';
      this.direccion = '';
      this.grupo = 0;
    
  }
}

