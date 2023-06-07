import "./estilo/estilo.css";
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";
import Login from "./pages/login";
import Cadastros from "./pages/cadastro";
import PaginaInicial from "./pages/paginainicial";
import AreaEntidade from "./pages/areaentidade";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/areadaentidade" element={<AreaEntidade />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
