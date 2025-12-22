import { MoonStars , PersonArmsSpread } from '@phosphor-icons/react';
import { AArrowUp, AArrowDown, Eclipse } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Nav(){
  const [open, setOpen] = useState(false);
    return(
        <nav className="w-full bg-laranja text-white text-3xlw font-montserrat py-4 items-center px-2 flex justify-between">
            <img
                src="./images/logo.png"
                className="ml-[2%] cursor-pointer selection:bg-branco"
                href='#home'
            />
            <div className="flex gap-10 mr-[2%] items-center">
                <a href='#sobre' className="cursor-pointer hover:text-laranjaEscuro selection:bg-branco selection:text-laranja">
                    <li className="list-none hover:text-laranjaEscuro text-branco text-xl">Sobre</li>
                </a>
                <a className="cursor-pointer hover:text-laranjaEscuro selection:bg-branco selection:text-laranja">
                    <li className="list-none hover:text-laranjaEscuro text-branco text-xl">Catálogo</li>
                </a>
                <a className="cursor-pointer hover:text-laranjaEscuro selection:bg-branco selection:text-laranja">
                    <li className="list-none hover:text-laranjaEscuro text-branco text-xl">Endereço</li>
                </a>
                <a className="cursor-pointer hover:text-laranjaEscuro selection:bg-branco selection:text-laranja">
                    <li className="list-none hover:text-laranjaEscuro text-branco text-xl">Contato</li>
                </a>
                <button className='cursor-point selection:bg-branco selection:text-laranja'>
                    <MoonStars className='text-branco hover:text-laranjaEscuro' size={30}/>
                </button> <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="hover:text-laranjaEscuro transition cursor-pointer text-branco"
              >
                <PersonArmsSpread size={29} />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 dark:bg-[#252525] bg-[#f3f3f3] rounded-md shadow-lg p-2 flex flex-col gap-2 z-50">

                  <button id="aumentar-texto" className="cursor-pointer p-2 rounded hover:bg-laranja flex items-center gap-2 dark:text-branco text-preto 
                  selection:bg-laranja selection:text-branco selection:dark:bg-branco selection:dark:text-laranja">
                    <AArrowUp size={18}/> Aumentar texto
                  </button>

                  <button id="diminuir-texto" className="cursor-pointer p-2 rounded hover:bg-laranja flex items-center gap-2 dark:text-branco text-preto 
                  selection:bg-laranja selection:text-branco selection:dark:bg-branco selection:dark:text-laranja">
                    <AArrowDown size={18}/> Diminuir texto
                  </button>

                  <button id="preto-e-branco" className="cursor-pointer p-2 rounded hover:bg-laranja flex items-center gap-2 dark:text-branco text-preto 
                  selection:bg-laranja selection:text-branco selection:dark:bg-branco selection:dark:text-laranja">
                    <Eclipse size={18}/> Preto & Branco
                  </button>
                </div>
              )}
            </div>
            </div>

           
        </nav>
    )
} 