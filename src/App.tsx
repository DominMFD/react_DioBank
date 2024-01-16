import { AppContextProvider } from "./components/AppContext";
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";
import { Header } from "./components/Header";

function App() {

  !getAllLocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <Header/>
        <Layout>
          <MainRoutes />
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
