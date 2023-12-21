import { useContext } from "react";
import { AppContext } from "./components/AppContext";
import { Routes, Route } from "react-router-dom";
import { Conta } from "./Pages/Conta";
import { Home } from "./Pages/Home";
import { Perfil } from "./Pages/Perfil";
import { getAllLocalStorage } from "./services/storage";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={ !isLoggedIn ? <Home /> : <Perfil />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path="/infoConta" element={<Perfil />} />
    </Routes>
  );
};

export default MainRoutes
