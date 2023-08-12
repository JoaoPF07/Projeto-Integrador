import FormPostLogEntidade from "../componentes/formpostlogentidade/formpostlogentidade";

function LoginEntidade() {
  return (
    <div  className="fundoPagLogCad">
      <div >
      <div  style={{
         backgroundImage: `url('/logoint.png')`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
}} className= "divlogologin"></div>
      <div className="FundoLogin">
        <div className="divTextoLogin">
          <div className="textologin">Entrar em Mãos Solidárias</div>
        </div>
        <div className="divFormLogin">
          <FormPostLogEntidade/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LoginEntidade;
