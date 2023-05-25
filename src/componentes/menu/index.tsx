import { type } from "@testing-library/user-event/dist/type";
import "./../../estilo/estilo.css";
import { Link } from "react-router-dom";

type Props = {
    menu1?: String
    menu2?: String
    menu3?: String

}

function Menu (menu:Props) {

    return (
        <div>
            <div className="classediv">
            <table className="table">
                <tr>
                    <td><Link to={'/'}><b>{menu.menu1}</b></Link></td>
                    <td><Link to={'/entidade'}><b>{menu.menu2}</b></Link></td>
                    <td><Link to={'/sobre'}><b>{menu.menu3}</b></Link></td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Menu;