import { Entidades } from "../../types/entidade";

type Props = {
  dados: Entidades;

};


function InfoEntidade({ dados }: Props) {
  return (
    <div className="divflex">
      <div className="infPerfil">
        <div className="divcoluna">
        <b>Email:{dados.email}</b>
        <br />
        <b>Telefone:{dados.telefone}</b>
        <br />
        <b>Cpnj:{dados.cnpj}</b>
        </div>
      </div>
      <div className="infPerfil">
        <div className="divcoluna">
        <b>Cidade:{dados.cidade}</b>
        <br />
        <b>Estado: {dados.estado}</b>
        <br />
        <b>Endereço: {dados.endereco}</b>
      </div>
      </div>
      <div className="infPerfil">
        <div className="divcoluna">
        <b>Cep:</b>
        <br />
        <b>Complemento: {dados.complemento}</b>
        </div>

      </div>
    </div>
  );
}

export default InfoEntidade;
