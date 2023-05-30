import Rodape from "../componentes/rodape";
import "../estilo/estilo.css";
import CabeçalhoInicial from "../componentes/cabecalhoinicial";

function PaginaInicial() {
  return (
    <div>
      <div className="divGlobal">
        <div>
          <CabeçalhoInicial />
        </div>
        <div className="divCorpoH">
          <div className="texto">
            <h1>Página em produção</h1> <br />
            <p>Sobre o Projeto</p>
          </div>

          <div
            style={{
              backgroundImage: `url('/img_inicial.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="imgHome"
          ></div>
        </div>
        <div>
          <Rodape />
        </div>
      </div>
    </div>
  );
}

export default PaginaInicial;
