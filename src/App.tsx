import "./estilo/estilo.css";
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";
import LoginEntidade from "./pages/loginentidade";
import Cadastros from "./pages/cadastro";
import PaginaInicial from "./pages/paginainicial";
import AreaEntidade from "./pages/areaentidade";
import UserEntidade from "./pages/userentidade";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/areadaentidade" element={<AreaEntidade />} />
          <Route path="/login-entidade" element={<LoginEntidade />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/entidades" element= {<UserEntidade/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
