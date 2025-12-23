import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import "./index.css"

function Admin() {
  return <h1>Área do Administrador</h1>;
}

function Treinador() {
  return <h1>Área do Treinador</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/treinador" element={<Treinador />} />
      </Routes>
    </BrowserRouter>
  );
}