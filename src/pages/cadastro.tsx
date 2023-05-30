import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import Rodape from "../componentes/rodape";
import "bootstrap/dist/css/bootstrap.min.css";

function Cadastros() {
  return (
    <div>
      <div className="cabecalho"></div>
      <br />
      <br />
      <div>
        <div className="divFundoCadastro">
          <div className="divtextocadastro">
            <div className="textocadastro1">Cadastre sua ONG aqui!</div>
            <div className="textocadastro2">É rapido e fácil</div>
          </div>
          <div className="divFormCadastro">
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Senha</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleName">Digite o nome da ONG</Label>
                <Input
                  id="exampleName"
                  name="nameOng"
                  placeholder="Nome da ONG"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleCNPJ">CNPJ</Label>
                <Input
                  id="exampleCNPJ"
                  name="CNPJ"
                  placeholder="Digite o CNPJ"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress">Endereço</Label>
                <Input
                  id="exampleAddress"
                  name="address"
                  placeholder="1234 Main St"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress2">Complemento</Label>
                <Input
                  id="exampleAddress2"
                  name="address2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">Cidade</Label>
                    <Input id="exampleCity" name="city" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">Estado</Label>
                    <Input id="exampleState" name="state" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">CEP</Label>
                    <Input id="exampleZip" name="zip" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                <Input id="exampleCheck" name="check" type="checkbox" />
                <Label check for="exampleCheck">
                  Check me out
                </Label>
              </FormGroup>
              <div className="divBotaoCadastro">
                <Button className="botaocadastro">Cadastrar-se</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default Cadastros;
