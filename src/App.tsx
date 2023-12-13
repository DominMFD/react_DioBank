
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <Header />
      <Card title="Faça o Login" event={login}/>
    </>
  );
}

export default App;
