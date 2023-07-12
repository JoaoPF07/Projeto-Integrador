import { Entidades } from "../../types/entidade";

type Props = {
  dados: Entidades;
};

function DadosEntidade({ dados }: Props) {
  return (
    <div className="ContainerEntidade">
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
        <b>Cep:{dados.cep}</b>
        <br />
        <b>Endereço: {dados.endereco}</b>
        <br />
        <b>Complemento: {dados.complemento}</b>
        <br />
        <b>Telefone:{dados.telefone}</b>
        <br />
        </div>
      </div>
    </div>
  );
}

export default DadosEntidade;
