import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  listaTarea:string[]=[];
  nuevaTarea:string= '';

  private _tareasService = inject(TareasService);

  ngOnInit(): void {
    this.listaTarea = this._tareasService.getTareas();
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea= "";
    this.listaTarea = this._tareasService.getTareas();
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index);
    this.listaTarea = this._tareasService.getTareas();
  }
}
