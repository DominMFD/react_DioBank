import { AppContextProvider } from "./components/AppContext";
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
