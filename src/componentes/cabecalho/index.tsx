import Menu from "../menu";
import MenuLogCad from "../menucadlog";

function Cabecalho() {
  return (
    <div>
      <div className="logcad">
        <div className="cabecalho">
          <Menu menu1="Home" menu2=" Area da Entidade" />
        </div>
        <div>
          {" "}
          <MenuLogCad menu3="Cadastrar" menu4="Login" />
        </div>
      </div>
    </div>
  );
}

export default Cabecalho;
