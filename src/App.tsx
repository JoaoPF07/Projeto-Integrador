import "./estilo/estilo.css";
import { Link, Route, Routes } from "react-router-dom";
import Sobre from "./pages/sobre";
import NotFound from "./pages/notfound";
import Login from "./pages/login";
import Cadastros from "./pages/cadastro";
import PaginaInicial from "./pages/paginainicial";
import Entidade from "./pages/entidade";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/entidade" element={<Entidade />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
