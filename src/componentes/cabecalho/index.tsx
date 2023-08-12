import { Link } from "react-router-dom";
import Menu from "../menu";

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
         backgroundRepeat: 'no-repeat'
}} className="divlogo"></div>
        </Link>
        <div className="divMenuCab">
          <Menu 
            menu1={'Entidades'}
            menu2={'Área da entidade'}/>
        </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Cabecalho;
