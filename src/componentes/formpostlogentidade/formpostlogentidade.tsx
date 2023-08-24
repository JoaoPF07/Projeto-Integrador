import { ChangeEvent, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";



function FormPostLogEntidade() {
  const navigate = useNavigate ();
  const [femail, setEmail] = useState ("");
  const [fsenha, setSenha] = useState ("");

const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
}

const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

    const UsuatioLogadoCtx = useContext (UsuarioLogadoContext);


  const Realizarlogin = async () => {
    
    let json = await api.Logar(femail, fsenha);

    alert(json.userId);

    if (json.userId) {
    alert ('Bem-vindo ' + femail);
    UsuatioLogadoCtx?.setName(femail)
    navigate('/');
  }else {
    alert ('Usuário/Senha não encontrado!')
  }
  };

  return <div>
            <div className="divLogin">
            <label htmlFor="email">Email</label>
            <input
             type="email"
             value={femail}
             placeholder = "Email"
             onChange={handleEmailChange}
             required
            />
            <label htmlFor="senha">Senha</label>
            <input
             type="password"
             value={fsenha}
             placeholder = "Senha"
             onChange={handleSenhaChange} 
             required/>
             </div>
             <button onClick={Realizarlogin}>Logar</button>
  </div>;
}

export default FormPostLogEntidade;
