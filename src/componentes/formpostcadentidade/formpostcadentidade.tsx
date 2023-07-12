import { useState, ChangeEvent } from "react";

type Props = {
  onAdd: (
  
    email: string,
    senha: string,
    nome: string,
    telefone: string,
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
  const [Telefone, setTelefone] = useState("");
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

  const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTelefone(e.target.value);
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

  const handleEstadoChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
        Telefone,
        Endereco,
        Complemento,
        Cidade,
        Estado,
        Cep
      );
    } else {
      alert("Preencha todos os campos");
    }
  }

  return (
    <div>
      <div className="divFormCadastro">
        <form>
          <div className="inputCampo1">
            <label htmlFor="nome">Nome da Ong</label>
            <input
              type="text"
              value={Nome}
              placeholder="Digite o email da entidade"
              onChange={handleNomeChange}
              required
            />
          </div>
          <br />
          <div className="inputEmailSenha">
            <fieldset>
              <label htmlFor="email">Email e Senha</label>
              <br />
              <input
                type="email"
                value={Email}
                placeholder="Digite a senha da entidade"
                onChange={handleEmailChange}
                required
              />
              <input
                type="password"
                value={Senha}
                placeholder="Digite o nome da entidade"
                onChange={handleSenhaChange}
                required
              />
            </fieldset>
          </div>
          <div className="inputCampo1">
          <label htmlFor="telefone">Telefone</label>
            <input type="text"
            value={Telefone}
            placeholder="Telefone" 
            onChange={handleTelefoneChange}
              />
            <label htmlFor="cnpj">Cnpj</label>
            <input
              type="text"
              value={Cnpj}
              placeholder="Cnpj"
              onChange={handleCnpjChange}
              required
            />
          </div>
          <div className="inputCidadeEstado">
            <fieldset>
              <label htmlFor="cidade">Cidade</label>

              <input
                type="text"
                value={Cidade}
                placeholder="Digite o endereço da entidade"
                onChange={handleCidadeChange}
                required
              />
              <label htmlFor="estado">Estado</label>

              <select
                name="estado"
                id="estado"
                required
                onChange={handleEstadoChange}
              >
                <option selected disabled value=" ">
                  Selecione
                </option>
                <option>Acre</option>
                <option>Alagoas</option>
                <option>Amapá</option>
                <option>Amazonas</option>
                <option>Bahia</option>
                <option>Ceará</option>
                <option>Distrito Federal</option>
                <option>Espirito Santo</option>
                <option>Goiás</option>
                <option>Maranhão</option>
                <option>Mato Grosso</option>
                <option>Mato Grosso do Sul</option>
                <option>Minas Gerais</option>
                <option>Pará</option>
                <option>Paraiba</option>
                <option>Paraná</option>
                <option>Pernambuco</option>
                <option>Piauí</option>
                <option>Rio de Janeiro</option>
                <option>Rio Grande do Norte</option>
                <option>Rio Grande do Sul</option>
                <option>Rondônia</option>
                <option>Roraima</option>
                <option>Santa Catarina</option>
                <option>São Paulo</option>
                <option>Sergipe</option>
                <option>Tocantins</option>
              </select>
            </fieldset>
          </div>
          <div className="inputEnderecoCep">
            <fieldset>
              <label>Endereço e Cep</label>
<br />
              <input
              id="endereco"
                type="text"
                value={Endereco}
                placeholder="Digite o Cidade da entidade"
                onChange={handleEnderecoChange}
                required
              />
              <input
                type="text"
                value={Cep}
                placeholder="Digite o Estado da entidade"
                onChange={handleCepChange}
                required
              />
            </fieldset>
          </div>

            <div className="inputComplemento">
            <label htmlFor="cep">Complemento</label>

            <input
              type="text"
              value={Complemento}
              placeholder="Digite o Cep da entidade"
              onChange={handleComplementoChange}
              required
            />
            </div>
        </form>
      </div>
      <div className="divBotaoCadastro">
      <button className="botaocadastro" onClick={handleClickButton}>
        Cadastrar
      </button>
      </div>
    </div>
  );
}

export default FormPostEntidade;
