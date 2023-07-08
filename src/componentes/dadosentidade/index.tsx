import { Entidades } from "../../types/entidade";

type Props = {
  dados: Entidades;
};

function DadosEntidade({ dados }: Props) {
  return (
    <div>
      <div className="divlista">
        {dados.email}
        <br />
        {dados.senha}
        <br />
        {dados.nome}
        <br />
        {dados.cnpj}
        <br />
        {dados.endereco}
        <br />
        {dados.complemento}
        <br />
        {dados.cidade}
        <br />
        {dados.estado}
        <br />
        {dados.cep}
        <br />
        {dados.cnpj}
        <br />
      </div>
    </div>
  );
}

export default DadosEntidade;
