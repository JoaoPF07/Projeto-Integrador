import Rodape from "../componentes/rodape";
import "../estilo/estilo.css"
import CabeçalhoInicial from "../componentes/cabecalhoinicial";


function PaginaInicial () {

    return (
        <div>
         <div>
        <CabeçalhoInicial />

      </div>
      <div className="divCorpoH">
        <div className="texto">
          <h1>Página em produção</h1> <br />
          <p>Sobre o Projeto</p>
        </div>
        <img
          className="imgHome"
          src="\img_inicial.jpg"
        />
      </div>
      <div>
        <Rodape />
      </div>
           
        </div>
    )
}

export default PaginaInicial;
