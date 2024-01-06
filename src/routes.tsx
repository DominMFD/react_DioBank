import { useContext } from "react";
import { AppContext } from "./components/AppContext";
import { Routes, Route } from "react-router-dom";
import { Conta } from "./Pages/Conta";
import { Home } from "./Pages/Home";
import { Perfil } from "./Pages/Perfil";
import { CriarConta } from "./Pages/CriarConta";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={ !isLoggedIn ? <Home /> : <Perfil />} />
      <Route path="/conta/:id" element={<Conta />} />
      <Route path="/infoConta" element={isLoggedIn ? <Perfil /> : <Home />} />
      <Route path="/criarConta" element={!isLoggedIn ? <CriarConta /> : < Perfil />} />
    </Routes>
  );
};

export default MainRoutes
