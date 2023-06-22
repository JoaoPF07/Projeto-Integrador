import { type } from "@testing-library/user-event/dist/type";
import "./../../estilo/estilo.css";
import { Link } from "react-router-dom";
import Teste from "../navbar";

type Props = {
  menu1?: String;
  menu2?: String;
  menu3?: String;
};

function Menu(menu: Props) {
  return (
    <div>
      <div className="classediv">
        <table className="table">
          <tr>
         
            <td>
            <div className="teste">
          <Teste/>
          </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Menu;
