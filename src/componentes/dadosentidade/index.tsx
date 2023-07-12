import { Entidades } from "../../types/entidade";

type Props = {
  dados: Entidades;
};

function DadosEntidade({ dados }: Props) {
  return (
    <div>
      <div className="divlista">
        <div 
         style={{
          backgroundImage: `url('/imgdocontainer.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }} className="imgContainer">
        </div>
        <br />
        <div className="divContainer">
        <b>Nome: {dados.nome}</b>
        <br />
        <b>Cidade:{dados.cidade}</b>
        <br />
        <b>Estado:{dados.estado}</b>
        <br />
        Cep:{dados.cep}
        <br />
        Endereço:{dados.endereco}
        <br />
        Complemento:{dados.complemento}
        <br />
        Telefone:{dados.telefone}
        <br />
        </div>
      </div>
    </div>
  );
}

export default DadosEntidade;
