import './index.css'
import Home from './pages/Home.jsx';
import Nav from './components/nav.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-branco dark:bg-preto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
