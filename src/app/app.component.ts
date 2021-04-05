import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //creo array para recibir del servidor
  arrPersonajes: any[];
  paginaActual: number;
  numPaginas: number;

  constructor(private personajesService: PersonajesService) {
    //si lo tengo guardado en localStorage lo recupero, sino la pagina 1
    //parse lo transforma a objeto
    if (localStorage.getItem('pagina_actual')) {
      this.paginaActual = JSON.parse(localStorage.getItem('pagina_actual'));
    } else {
      this.paginaActual = 1;
    }
  }

  //lo que me devuelve la API: response.results (aqui estan los personajes) o response.info.
  ngOnInit(): void {
    this.personajesService.getAll(this.paginaActual)
      .then(response => {
        //console.log(response); // comprobar lo que recibo
        //this.arrPersonajes = response['results'];
        this.arrPersonajes = response.results;
        //para recuperar el numero de paginas totales de la API (segun estructura de esta API)
        //this.numPaginas = response.info.pages; //con <any> puedo ponerlo asi con el punto
        this.numPaginas = response['info']['pages'];
      })
      .catch(error => console.log(error));
  }

  //siguiente es true
  //modifico pagina y vulevo a pedir personajes
  //response = lo que me devuelve

  async onClick(siguiente) {
    if (siguiente) {
      this.paginaActual++;
    } else {
      this.paginaActual--;
    }
    const { results } = await this.personajesService.getAll(this.paginaActual);
    this.arrPersonajes = results;
    console.log(results);

    //Actualizo la pagina actual en LocalStorage:
    //sessionStorage cuando cierro navegador se pierden los datos guardados, con localStorage se mantienen. Ver Firefox/inspeccionar/Almacenamiento/Almacenamiento Local/local
    localStorage.setItem('pagina_ctual', JSON.stringify(this.paginaActual));
  }

}
