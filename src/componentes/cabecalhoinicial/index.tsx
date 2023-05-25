import "./../../estilo/estilo.css";
import MenuLogCad from "../menucadlog";



function CabeçalhoInicial() {
  return (
    <div>
      <div className="cabecalhoinicial">
        <MenuLogCad
          menu1="Cadastrar"
          menu2="Login"
        />
      </div>
    </div>
  );
}

export default CabeçalhoInicial;
