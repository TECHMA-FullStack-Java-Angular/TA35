import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnChanges {
  name = 'Listado Clientes';
  @Input() formValues: any;

  // Variables para renderizar en la tabla
  nombreTabla: string = '';
  cifTabla: string = '';
  direccionTabla: string = '';
  grupoTabla: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formValues'] && this.formValues) {
      this.nombreTabla = this.formValues.nombre;
      this.cifTabla = this.formValues.cif;
      this.direccionTabla = this.formValues.direccion;
      this.grupoTabla = this.formValues.grupo;
    }
  }
}
