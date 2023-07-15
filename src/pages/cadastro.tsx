import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { api } from "../api";
import FormPostCadEntidade from "../componentes/formpostcadentidade/formpostcadentidade";
import { Entidades } from "../types/entidade";



function Cadastros() {
  const [Entidade, setEntidade] = useState <Entidades[]>([])

  const handleInserir = async (
    
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
  ) => {

    let json = await api.AdicionarEntidade(
    
      email,
      senha,
      nome,
      telefone,
      cnpj,
      endereco,
      complemento,
      cidade,
      estado,
      cep,
    );

    if(json.id) {
      alert(json.message)
      setEntidade((Entidade) => [...Entidade, json]);
    }else {
      alert (json.message)
    }



  }

  return (
    <div className="fundoPagLogCad">
      <div>
      <div>
      <div  style={{
         backgroundImage: `url('/logoint.png')`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
}} className= "divlogologin"></div>

        <div className="divFundoCadastro">
          <div className="divtextocadastro">
            <div className="textocadastro1">Cadastre sua ONG aqui!</div>
            <div className="textocadastro2">É rápido e fácil</div>
          </div>
          <div>
            <FormPostCadEntidade onAdd={handleInserir}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cadastros;
