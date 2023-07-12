import "../estilo/estilo.css";
import Carrossel from "../componentes/carrossel";
import Cabecalho from "../componentes/cabecalho";
import ContainerEntidade from "../componentes/containerentidade";
import DadosEntidade from "../componentes/dadosentidade";

function PaginaInicial() {
  return (
    <div>
      <div>
        <div>
          <Cabecalho />
        </div>
        <div>
          <Carrossel />
        </div>
        <div className="divCorpoH">
          <div
            style={{
              backgroundImage: `url('/logoint.png')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="divlogo2"
          ></div>
          <div className="texto">
            <div className="bpginicial">
              O projeto social "Mãos Solidárias" é uma plataforma online que
              conecta ONGs com pessoas interessadas em ajudar. Através dessa
              página, as ONGs divulgam suas necessidades, como doações e
              apadrinhamentos. Os doadores têm acesso a perfis detalhados das
              organizações, podendo escolher aquelas que desejam apoiar. A
              plataforma facilita doações e voluntariado. Além disso, oferece a
              opção de apadrinhamento, criando um vínculo de longo prazo entre o
              doador e a ONG ou uma criança/adolescente assistido por ela. A
              transparência e o monitoramento do impacto das doações são
              incentivados, com relatórios periódicos compartilhados pelas ONGs.
              O objetivo é fortalecer a rede de solidariedade, promover a
              sustentabilidade e impactar positivamente as comunidades atendidas
              pelas ONGs participantes.
            </div>
            <hr />
            <br />
            <ContainerEntidade/>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaInicial;
