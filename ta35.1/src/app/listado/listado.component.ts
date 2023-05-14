import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  name = 'Listado Clientes';
  @Input() formValues!: any[];
  nuevoNombre: string = '';
  nuevoCIF: string = '';
  nuevaDireccion: string = '';
  nuevoGrupo: number = 0;
}


