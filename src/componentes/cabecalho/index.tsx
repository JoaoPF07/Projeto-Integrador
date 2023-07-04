import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";
import Menu from "../navbar";
import Teste from "../navbar";

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
        <div className="teste">
          <Menu />
        </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Cabecalho;
