import { Component, Input } from '@angular/core';
import { Tarea } from './models/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tareas';
  arrTareas: Tarea[];

  constructor(){
    
    this.arrTareas = [];
  }

  onTeclaLevantada($event){
    //console.log($event);
  }

  onTareaEnviada($event){
    // console.log($event);
    this.arrTareas.push($event);
    // console.log(this.arrTareas);
  }
}
