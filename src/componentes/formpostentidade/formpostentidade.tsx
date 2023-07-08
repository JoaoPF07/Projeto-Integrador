import { useState, ChangeEvent } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

type Props = {
  onAdd: (
    email: string,
    senha: string,
    nome: string,
    cnpj: string,
    endereco: string,
    complemento: string,
    cidade: string,
    estado: string,
    cep: string
  ) => void;
};

function FormPostEntidade({ onAdd }: Props) {
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

  function handleClickButton() {
    if (
      Nome &&
      Email &&
      Senha &&
      Cnpj &&
      Endereco &&
      Complemento &&
      Cidade &&
      Estado &&
      Cep
    ) {
      onAdd(
        Email,
        Senha,
        Nome,
        Cnpj,
        Endereco,
        Complemento,
        Cidade,
        Estado,
        Cep
      );
    } else {alert("Preencha todos os campos")}
  }

  return (
    <div>
      <div className="divFormCadastro">
        <input
          type="text"
          value={Email}
          placeholder="Digite o email da entidade"
          onChange={handleEmailChange}
        />

        <input
          type="text"
          value={Senha}
          placeholder="Digite a senha da entidade"
          onChange={handleSenhaChange}
        />

        <input
          type="text"
          value={Nome}
          placeholder="Digite o nome da entidade"
          onChange={handleNomeChange}
        />

        <input
          type="text"
          value={Cnpj}
          placeholder="Digite o Cnpj da entidade"
          onChange={handleCnpjChange}
        />

        <input
          type="text"
          value={Endereco}
          placeholder="Digite o endereço da entidade"
          onChange={handleEnderecoChange}
        />

        <input
          type="text"
          value={Complemento}
          placeholder="Digite o Complemento da entidade"
          onChange={handleComplementoChange}
        />

        <input
          type="text"
          value={Cidade}
          placeholder="Digite o Cidade da entidade"
          onChange={handleCidadeChange}
        />

        <input
          type="text"
          value={Estado}
          placeholder="Digite o Estado da entidade"
          onChange={handleEstadoChange}
        />

        <input
          type="text"
          value={Cep}
          placeholder="Digite o Cep da entidade"
          onChange={handleCepChange}
        />

        <button onClick={handleClickButton}>enviar</button>
      </div>
    </div>
  );
}

export default FormPostEntidade;
