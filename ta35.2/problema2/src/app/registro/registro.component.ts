import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  name = 'Registros de contacto';
  @Input() formValues!: any[];
  nuevoNombre: string = '';
  nuevoEmail: string = '';
  nuevaMensaje: string = '';

}
