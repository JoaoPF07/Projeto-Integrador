import { Entidades } from "../../types/entidade";
import BioEntidade from "../bioentidade/bioentidade";
import InfoEntidade from "../infoentidade/infoentidade";


type Props = {
    dados: Entidades
  }

function PerfilEntidade ({ dados }: Props) {

    return (
        <div>
            <div className="divNomeEnt">
        <b>{dados.nome}</b>
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
        </div>
        <BioEntidade/>
      
      <div className="divflex">
      </div>

        </div>
    )
}

export default PerfilEntidade;