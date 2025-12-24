import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Registro from "./pages/Registro";
import "./index.css"

function Admin() {
  return <h1>Área do Administrador</h1>;
}

function Treinador() {
  return <h1>Área do Treinador</h1>;
}

function Inicio() { return <h1>Início</h1>; }
function Elenco() { return <h1>Central do Elenco</h1>; }
function Adversario() { return <h1>Adversário</h1>; }
function TempoReal() { return <h1>Tempo Real</h1>; }
function Clube() { return <h1>Clube</h1>; }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />

        <Route element={<AppLayout />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/elenco" element={<Elenco />} />
          <Route path="/adversario" element={<Adversario />} />
          <Route path="/tempo-real" element={<TempoReal />} />
          <Route path="/clube" element={<Clube />} />
          <Route path="/registro" element={<Registro />} />
        </Route>

        <Route path="/admin" element={<Admin />} />
        <Route path="/treinador" element={<Treinador />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}