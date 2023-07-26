import BioEntidade from "../componentes/bioentidade/bioentidade";
import Cabecalho from "../componentes/cabecalho";
import InfoEntidade from "../componentes/infoentidade/infoentidade";

function DetalhamentoEntidade() {
  return (
    <div>
      <Cabecalho />
      <div className="divNomeEnt">
        <b>Nome Entidade</b>
      </div>
      <div className="divflex">
        <div
          style={{
            backgroundImage: `url('/imgdocontainer.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="imgPerfil"
        ></div>
        <BioEntidade />
      </div>
      <div className="divflex">
      <InfoEntidade/>
      </div>

    </div>
  );
}

export default DetalhamentoEntidade;
