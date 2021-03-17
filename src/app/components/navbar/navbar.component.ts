import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() nuevaTarea: Tarea;
  @Output() enviarTarea: EventEmitter<Tarea>;

  constructor() {
    this.nuevaTarea = new Tarea();
    this.enviarTarea = new EventEmitter;
   }

  ngOnInit(): void {
  }

  

  enviarTareaNueva(){
    // console.log(`Tarea nueva: ${this.nuevaTarea.nombre}`);
    this.enviarTarea.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }

}
