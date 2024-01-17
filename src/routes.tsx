import { useContext } from "react";
import { AppContext } from "./components/AppContext";
import { Routes, Route } from "react-router-dom";
import { Conta } from "./Pages/AccountPage";
import { Home } from "./Pages/HomePage";
import { Perfil } from "./Pages/ProfilePage";
import { CriarConta } from "./Pages/CreateAccountPage";
import { AlterarEmail } from "./Pages/ChangeEmailPage";
import { AlterarSenha } from "./Pages/ChangePasswordPage";
import { DepositPage } from "./Pages/DepositPage";
import { WithdrawPage } from "./Pages/WithdrawPage";
import { Header } from "./components/Header";

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
      <Route path="/depositar" element={<DepositPage />} />
      <Route path="/sacar" element={<WithdrawPage />} />
    </Routes>
  );
};

export default MainRoutes
