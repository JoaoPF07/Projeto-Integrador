import { useState } from "react";
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
      <div className="divForm">
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
    <Button>
      Submit
    </Button>
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