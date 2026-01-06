import { useEffect, useState } from 'react'
import './index.css'
import Home from './pages/Home'
import Nav from './components/nav'
import Footer from './components/footer'
import { Routes, Route } from "react-router-dom"

function App() {
  
   useEffect(() => {
    let fontSize = 100;
    const MIN = 50;
    const MAX = 200;

    const changeSize = (delta) => {
      fontSize = Math.min(MAX, Math.max(MIN, fontSize + delta));
      document.documentElement.style.fontSize = fontSize + "%";
    };

    const resetSize = () => {
      fontSize = 100;
      document.documentElement.style.fontSize = fontSize + "%";
    };

    const onDocClick = (e) => {
      const btn = e.target.closest("#aumentar-texto, #diminuir-texto, #preto-e-branco");
      if (!btn) return;

      if (btn.id === "aumentar-texto") {
        changeSize(10);
        return;
      }
      if (btn.id === "diminuir-texto") {
        changeSize(-10);
        return;
      }
      if (btn.id === "preto-e-branco") {
        document.body.classList.toggle("preto-e-branco");
        return;
      }
    };

    document.addEventListener("click", onDocClick);

    const saved = localStorage.getItem("appFontSize");
    if (saved) {
      fontSize = Number(saved);
      document.documentElement.style.fontSize = fontSize + "%";
    }

    const saveFontSize = () => localStorage.setItem("appFontSize", String(fontSize));

    const observer = new MutationObserver(saveFontSize);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });


    return () => {
      document.removeEventListener("click", onDocClick);
      observer.disconnect();
    };

  
  }, []);


  const [isDark, setIsDark] = useState(
    localStorage.getItem('darkMode') === 'true'
  )

  function toggleDarkMode() {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('darkMode', newTheme)
  }

  useEffect(() => {
    const root = document.documentElement 
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-branco dark:bg-preto transition-colors duration-300 ease-in-out">
      <Nav darkMode={toggleDarkMode} isDark={isDark} />
      
      <div id="app-content">
        <main className='pt-14 md:pt-[95px]'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
