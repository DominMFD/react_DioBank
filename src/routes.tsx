import { useContext } from "react";
import { AppContext } from "./components/AppContext";
import { Routes, Route } from "react-router-dom";
import { Conta } from "./Pages/Conta";
import { Home } from "./Pages/Home";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
    </Routes>
  );
};

export default MainRoutes
