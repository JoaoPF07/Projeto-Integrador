import { ChangeEvent, useState } from "react";

type Props = {
  onAdd: (
    email: string,
    senha: string
) => void;
};



function FormPostLogEntidade() {

    const [Email, setEmail] = useState ("");
const [Senha, setSenha] = useState ("");

const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
}

const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };
  
  return <div>
        <form>
            <input
             type="email"
             value={Email}
             placeholder = "Email"
             onChange={handleEmailChange}
             required
            />
            <input
             type="text"
             value={Senha}
             placeholder = "Senha"
             onChange={handleSenhaChange} 
             required/>
        </form>
  </div>;
}

export default FormPostLogEntidade;
