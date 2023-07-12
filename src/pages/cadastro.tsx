import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { api } from "../api";
import FormPostEntidade from "../componentes/formpostcadentidade/formpostcadentidade";
import { Entidades } from "../types/entidade";



function Cadastros() {
  const [Entidade, setEntidade] = useState <Entidades[]>([])

  const handleInserir = async (
    
    email: string,
    senha: string,
    nome: string,
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
      cnpj,
      endereco,
      complemento,
      cidade,
      estado,
      cep,
    );

    if(json.id) {
      alert('Entidade cadastrada com sucesso!')
      setEntidade((Entidade) => [...Entidade, json]);
    }else {
      alert ("Faha ao se cadastrar")
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
            <div className="textocadastro2">É rapido e fácil</div>
          </div>
          <div>
            <FormPostEntidade onAdd={handleInserir}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cadastros;
