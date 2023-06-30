import { Entidade } from "../../types/entidade";

type Props = {
  dados: Entidade;
};

function DadosEntidade({ dados }: Props) {
  return (
    <div>
      <div className="divlista">
        {dados.id}
        <br />
        {dados.userId}
        <br />
        {dados.title}
        <br />
      </div>
    </div>
  );
}

export default DadosEntidade;
