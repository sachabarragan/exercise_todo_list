import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() listaTareas: Tarea[];
  @Input() nombreTarea: Tarea;

  constructor() { 
    this.listaTareas = [];
    this.nombreTarea = new Tarea();
  }

  ngOnInit(): void {
  }

  eliminarTarea(i): void{
    // console.log(this.listaTareas[i]);
    this.listaTareas.splice(i, 1);
  }

  onChangeState($event, i): void {
    // console.log($event);
    this.listaTareas[i].estado = $event;
    // console.log(this.listaTareas[i]);
  }

}
