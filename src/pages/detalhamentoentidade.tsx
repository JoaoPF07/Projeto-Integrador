import Cabecalho from "../componentes/cabecalho";

function DetalhamentoEntidade() {
  return (
    <div className="fundoPerfil">
      <Cabecalho />
      <div className="divNomeEnt">
        <b>Nome Entidade</b>
      </div>
      <div id="divflex">
        <div
          style={{ 
            backgroundImage: `url('/imgdocontainer.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="imgPerfil"
        ></div>
        <div className="infPerfil">
          <b>Email:</b>
          <br />
          <br />
          <b>Telefone:</b>
          <br />
          <br />
          <b>Cpnj:</b>
        </div>
          <div className="infPerfil">
          <b>Cidade:</b>
          <br />
          <br />
          <b>Estado:</b>
          <br />
          <br />
          <b>Endereço:</b>
          </div>
          <div className="infPerfil">
          <b>Cep:</b>
          <br />
          <br />
          <b>Complemento:</b>
          </div>
      </div>
    </div>
  );
}

export default DetalhamentoEntidade;
