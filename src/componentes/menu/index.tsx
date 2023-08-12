import { Link } from "react-router-dom";
import "./../../estilo/estilo.css";

type Props = {
  menu1?: String;
  menu2?: String;
};

function Menu(menu: Props) {
  return (
    <div>
      <nav>
        <Link className="Link" to={"/entidades"}>Entidades</Link>
        <Link className="Link" to={"/cadastros"}>Área da entidade</Link>
      </nav>
    </div>
  );
}

export default Menu;
