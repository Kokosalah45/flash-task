import './App.css';
import { useAuth } from './providers/AuthContext';

function App() {
  const { state } = useAuth();

  return <div>{state}</div>;
}

export default App;
