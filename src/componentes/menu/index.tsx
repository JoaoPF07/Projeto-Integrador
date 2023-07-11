import "./../../estilo/estilo.css";

type Props = {
  menu1?: String;
  menu2?: String;
};

function Menu(menu: Props) {
  return (
    <div>
      <div className="classediv">
       <div className="divMenu1"> {menu.menu1}</div>
       <div className="divMenu2">{menu.menu2}</div>
      </div>
    </div>
  );
}

export default Menu;
