import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";

function Login() {
  return (
    <div>
      <div className="cabecalho">Login</div>
      <br />
      <br />
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
        <Button>Submit</Button>
      </Form>
      <Rodape />
    </div>
  );
}

export default Login;
