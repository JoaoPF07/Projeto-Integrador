import { useState, ChangeEvent } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

type Props = {
  onAdd: (
    email: string,
    senha: string,
    nome: string,
    cnpj: bigint,
    endereco: string,
    complemento: string,
    cidade: string,
    estado: string,
    cep: bigint
  ) => void;
};

function FormPostEntidade() {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Nome, setNome] = useState("");
  const [Cnpj, setCnpj] = useState("");
  const [Endereco, setEndereco] = useState("");
  const [Complemento, setComplemento] = useState("");
  const [Cidade, setCidade] = useState("");
  const [Estado, setEstado] = useState("");
  const [Cep, setCep] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleCnpjChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCnpj(e.target.value);
  };
  
  const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndereco(e.target.value);
  };

  const handleComplementoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComplemento(e.target.value);
  };

  const handleCidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCidade(e.target.value);
  };

  const handleEstadoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEstado(e.target.value);
  };

  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

    function handleClickButton () {
        
    }

  return (
    <div>
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
            <Input id="exampleName" name="nameOng" placeholder="Nome da ONG" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleCNPJ">CNPJ</Label>
            <Input id="exampleCNPJ" name="CNPJ" placeholder="Digite o CNPJ" />
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
  );
}

export default FormPostEntidade;
