import { ChangeEvent, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../api";



function FormPostLogEntidade() {
  const navigate = useNavigate ();
  const [email, setEmail] = useState ("");
  const [senha, setSenha] = useState ("");

const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
}

const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };


  const Realizarlogin = async () => {
    
    let json = await api.Logar(email, senha);

    alert(json.userId);

    if (json.userId) {
    alert ('Bem-vindo ' + email);
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
             value={email}
             placeholder = "Email"
             onChange={handleEmailChange}
             required
            />
            <label htmlFor="senha">Senha</label>
            <input
             type="password"
             value={senha}
             placeholder = "Senha"
             onChange={handleSenhaChange} 
             required/>
             </div>
             <button onClick={Realizarlogin}>Logar</button>
  </div>;
}

export default FormPostLogEntidade;
