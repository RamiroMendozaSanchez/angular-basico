import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['spiderman','Iroman','Hulk','Thor','Capitan America'];
  heroeBorrado :string = ''

  borrarHeroe(){
    console.log('Borrando');
    this.heroeBorrado = this.heroes.pop() || '';
    
  }
}
