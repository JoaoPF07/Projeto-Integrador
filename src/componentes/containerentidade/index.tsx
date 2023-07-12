import { useEffect, useState } from "react";
import { Entidades } from "../../types/entidade";
import DadosEntidade from "../dadosentidade";

function ContainerEntidade() {
  const [entidades, setEntidades] = useState<Entidades[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarEntidades();
  }, []);

  const carregarEntidades = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        "http://localhost:3000/entidades"
      );
      let json = await response.json();

      const dataArray = Array.isArray(json) ? json : [json];

      setEntidades(dataArray);
    } catch (e) {
      alert("Falha no carregamento das informações");
      setLoading(false);
      console.error(e);
    }
  };

  return (
    <div className="ContainerEntidade">
      {entidades.map((item, index) => (
        <DadosEntidade key={index} dados={item} />
      ))}
    </div>
  );
}

export default ContainerEntidade;
