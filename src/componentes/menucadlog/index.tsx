import "./../../estilo/estilo.css";
import { Link } from "react-router-dom";

type Props = {
  menu1?: String;
  menu2?: String;
 
};
function MenuLogCad(menu: Props) {
  return (
    <div>
    <div className="teste">
      <div className="divLogCad"><Link to={'/cadastros'}>{menu.menu1}</Link></div>
      <div className="divLogCad"><Link to={'/login'}>{menu.menu2}</Link></div>
      </div>
    </div>
  );
}

export default MenuLogCad;
