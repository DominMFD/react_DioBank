import { useContext } from "react";
import { AppContext } from "./components/AppContext";
import { Routes, Route } from "react-router-dom";
import { Conta } from "./Pages/Conta";
import { Home } from "./Pages/Home";
import { Perfil } from "./Pages/Perfil";
import { CriarConta } from "./Pages/CriarConta";
import { AlterarEmail } from "./Pages/AlterarEmail";
import { AlterarSenha } from "./Pages/AlterarSenha";

const MainRoutes = () => {
  const { isLoggedIn, user } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={ !isLoggedIn ? <Home /> : <Perfil data={user} />} />
      <Route path="/conta/:id" element={<Conta />} />
      <Route path="/infoConta" element={isLoggedIn ? <Perfil data={user} /> : <Home />} />
      <Route path="/criarConta" element={!isLoggedIn ? <CriarConta /> : < Perfil data={user} />} />
      <Route path="/alterarEmail" element={<AlterarEmail /> }/>
      <Route path="/alterarSenha" element={<AlterarSenha />} />
    </Routes>
  );
};

export default MainRoutes
