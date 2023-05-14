import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Router />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
