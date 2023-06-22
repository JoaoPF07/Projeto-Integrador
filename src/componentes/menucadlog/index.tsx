import "./../../estilo/estilo.css";
import { Link } from "react-router-dom";

type Props = {
  menu3?: String;
  menu4?: String;
};
function MenuLogCad(menu: Props) {
  return (
    <div>
      <div className="divMenu">
        <div className="divLogCad">
          <Link to={"/cadastros"}>{menu.menu3}</Link>
        </div>
        <div className="divLogCad">
          <Link to={"/login"}>{menu.menu4}</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuLogCad;
