
import { Conta } from './Pages/Conta';
import { Home } from './Pages/Home';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/conta' element={<Conta />}/>
          <Route path='/conta/:id' element={<Conta />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
