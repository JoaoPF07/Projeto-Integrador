import Rodape from "../componentes/rodape";
import "../estilo/estilo.css";
import CabeçalhoInicial from "../componentes/cabecalhoinicial";
import Carrossel from "../componentes/carrossel";

function PaginaInicial() {
  return (
    <div>
      <div className="divGlobal">
        <div>
          <CabeçalhoInicial />
        </div>
        <div>
          <Carrossel />
        </div>
        <div className="divCorpoH">
          <div className="texto">
            <h1>Página em produção</h1> <br />
            <p>Sobre o Projeto</p>
          </div>
        </div>
        <div>
          <Rodape />
        </div>
      </div>
    </div>
  );
}

export default PaginaInicial;
