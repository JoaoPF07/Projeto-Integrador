import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Rodape from "../componentes/rodape";

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
          <Form>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>{" "}
            <div>
              <Button className="botao">Entrar</Button>
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
        <Rodape />
      </div>
      </div>
    </div>
  );
}

export default LoginEntidade;
