import { useState, useEffect } from "react";
import Cabecalho from "../componentes/cabecalho";
import DadosEntidade from "../componentes/dadosentidade";
import InfoEntidade from "../componentes/infoentidade/infoentidade";
import PerfilEntidade from "../componentes/perfilentidade/perfilentidade";
import { Entidades } from "../types/entidade";
import { api } from "../api";

function DetalhamentoEntidade() {

  const [entidades, setEntidades] = useState<Entidades[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarEntidades();
  }, []);

  const carregarEntidades = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        "http://localhost:3010/entidades"
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
    <div>
      <Cabecalho />
      {entidades.map((item, index) => (
        <PerfilEntidade key={index} dados={item}/>
      ))}
       {entidades.map((item, index) => (
        <InfoEntidade key={index} dados={item} />
      ))}
      

      
    </div>
  );
}

export default DetalhamentoEntidade;
