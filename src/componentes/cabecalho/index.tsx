import { Link } from "react-router-dom";
import Menu from "../menu";
import MenuLogCad from "../menucadlog";

function Cabecalho() {
  return (
    <div>
      <div>
        <div className="cabecalho">
        <Link to={"/"}>
          <div style={{
         backgroundImage: `url('/logoint.png')`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
}} className="divlogo"></div>
        </Link>
          <Menu 
             menu1="Entidades"
             menu2=" Area da Entidade" />
        </div>
      </div>
    </div>
  );
}

export default Cabecalho;
