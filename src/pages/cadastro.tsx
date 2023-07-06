import "bootstrap/dist/css/bootstrap.min.css";
import FormPostEntidade from "../componentes/formpostentidade/formpostentidade";

function Cadastros() {
  return (
    <div className="fundoPagLogCad">
      <div>
      <div>
      <div  style={{
         backgroundImage: `url('/logoint.png')`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
}} className= "divlogologin"></div>

        <div className="divFundoCadastro">
          <div className="divtextocadastro">
            <div className="textocadastro1">Cadastre sua ONG aqui!</div>
            <div className="textocadastro2">É rapido e fácil</div>
          </div>
          <div>
            <FormPostEntidade/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cadastros;
