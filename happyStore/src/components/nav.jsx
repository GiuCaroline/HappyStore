import { MoonStars, Sun, List, X } from "@phosphor-icons/react";
import { AArrowUp, AArrowDown, Eclipse } from 'lucide-react'
import { PersonArmsSpread } from "@phosphor-icons/react";
import { useState } from "react";

export default function Nav({ darkMode, isDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-laranja shadow-xl font-montserrat py-1">
      
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-4 py-4 md:px-8">

        {/* LOGO */}
        <a href="#home">
          <img src="./images/logo.png" className=" cursor-pointer selection:bg-branco" />
        </a>

        <ul className="hidden md:flex gap-10 items-center text-branco">
          {["sobre", "catalogo", "endereco", "footer"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-xl hover:text-laranjaEscuro transition selection:bg-branco selection:text-laranja"
              >
                {item === "footer"
                  ? "Contato"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          <button onClick={darkMode}>
            {isDark ? <Sun size={28} /> : <MoonStars size={28} />}
          </button>

          <div className="relative top-[2px]">
            <button
              onClick={() => setAccessOpen(!accessOpen)}
              className="hover:text-laranjaEscuro transition"
            >
              <PersonArmsSpread size={28} weight="light"/>
            </button>

            {accessOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-branco dark:bg-[#252525] rounded-md shadow-lg p-2 flex flex-col gap-5 z-50">
                <button id="aumentar-texto" className="access-btn cursor-pointer p-2 rounded hover:bg-laranja flex items-center gap-2 dark:text-branco text-preto 
                    selection:bg-laranja selection:text-branco selection:dark:bg-branco selection:dark:text-laranja">
                  <AArrowUp size={18} /> Aumentar texto
                </button>
                <button id="diminuir-texto" className="access-btn cursor-pointer p-2 rounded hover:bg-laranja flex items-center gap-2 dark:text-branco text-preto 
                    selection:bg-laranja selection:text-branco selection:dark:bg-branco selection:dark:text-laranja">
                  <AArrowDown size={18} /> Diminuir texto
                </button>
                <button id="preto-e-branco" className="access-btn cursor-pointer p-2 rounded hover:bg-laranja flex items-center gap-2 dark:text-branco text-preto 
                    selection:bg-laranja selection:text-branco selection:dark:bg-branco selection:dark:text-laranja">
                  <Eclipse size={18} /> Preto & Branco
                </button>
              </div>
            )}
          </div>
        </ul>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-branco"
        >
          <List size={32} />
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="fixed inset-0 bg-laranja text-branco flex flex-col items-center justify-center gap-8 text-2xl z-50">

          <button
            onClick={() => {
              setMenuOpen(false);
              setAccessOpen(false);
            }}
            className="absolute top-6 right-6"
          >
            <X size={32} />
          </button>

          {["home", "sobre", "catalogo", "endereco", "footer"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-laranjaEscuro transition"
            >
              {item === "home"
                ? "Início"
                : item === "footer"
                ? "Contato"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* DARK MODE MOBILE */}
          <button onClick={darkMode} className="mt-4">
            {isDark ? <Sun size={30} /> : <MoonStars size={30} />}
          </button>

          {/* ACESSIBILIDADE MOBILE */}
          <div className="relative mt-4">
            <button
              onClick={() => setAccessOpen(!accessOpen)}
              className="flex items-center gap-2 hover:text-laranjaEscuro"
            >
              <PersonArmsSpread size={30} />
              Acessibilidade
            </button>

            {accessOpen && (
              <div className="mt-4 w-60 bg-branco dark:bg-[#252525] rounded-md shadow-lg p-3 flex flex-col gap-5 text-base text-preto dark:text-branco">
                <button id="aumentar-texto" className="access-btn flex items-center gap-2">
                  <AArrowUp size={20} /> Aumentar texto
                </button>
                <button id="diminuir-texto" className="access-btn flex items-center gap-2">
                  <AArrowDown size={20} /> Diminuir texto
                </button>
                <button id="preto-e-branco" className="access-btn flex items-center gap-2">
                  <Eclipse size={20} /> Preto & Branco
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}