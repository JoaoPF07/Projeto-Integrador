import { Form ,FormGroup, Input, Label, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";




function Login (){

  return (
    <div>
      <div className="cabecalho">
      Login
      </div>
      <br />
      <br />
      <div className="FundoLogin">
        <div className="divTextoLogin">
      <div className="textologin">Login da ONG</div>
      </div>
      <div className="divFormLogin">
      <Form>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <div >
    <Button className="botao">
      Entrar
    </Button>
    </div>
    <div className="divEsqueceuSenha">
      <div className="textoesqueceusenha"> Esqueceu a senha?</div>
    </div>
    <div>
      <Button className="botaoCadastrar">
        <a className="ancora" href="http://localhost:3000/cadastros">
         Cadastrar
         </a>
      </Button>
    </div>
  </Form>
  </div>
  
  </div>
      <div>
      <Rodape/>
      </div>
    </div>
  )
}

export default Login;