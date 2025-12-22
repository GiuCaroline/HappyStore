import { BookOpenText  } from '@phosphor-icons/react';

export default function Home(){
    return(
        <div className="font-montserrat">
            <div className="relative w-full h-auto" id='home'>
                <img 
                    src="./images/banner.jpeg"
                    className="w-full h-[90vh] object-cover selection:bg-branco"
                />
                <div className="absolute inset-0 bg-black/40 selection:bg-branco"></div>
                <div className="absolute inset-0 flex items-center justify-start ml-[10%]">
                    <div className='flex-row'>
                        <h1 className="text-branco text-8xl cursor-default font-italiana selection:bg-laranja selection:text-branco">Venha<br/>conhecer<br/>nossa loja!</h1>
                        <button className='selection:bg-branco selection:text-laranja flex text-branco items-center gap-3 text-xl bg-laranja rounded-full p-3 px-10 mt-[4%] transition duration-500 transform-cpu hover:scale-105'>
                            <BookOpenText weight='light' size={30}/>
                            Acesse o catálogo completo
                        </button>
                    </div>
                </div>
            </div>

            <div className='mt-[3%] px-[2%]' id='sobre'>
                <div className='flex items-center gap-3'>
                    <div className="w-[10%] flex-1 h-[1px] dark:bg-branco bg-preto rounded-full
                     selection:bg-laranja selection:text-branco"></div>
                    <p className='dark:text-branco text-preto text-3xl
                     selection:bg-laranja selection:text-branco'>Sobre nós</p>
                    <div className="w-[10%] flex-1 h-[1px] dark:bg-branco bg-preto rounded-full
                     selection:bg-laranja selection:text-branco"></div>
                </div>

                <div className='justify-between flex mt-[2%] items-center gap-[20%]'>
                    <p className='ml-[5%] dark:text-branco text-preto text-2xl
                     selection:bg-laranja selection:text-branco'>A HAPPY Store nasceu para levar mais estilo e<br/>
                    felicidade ao seu dia a dia. Trabalhamos com moda
                    feminina, masculina e infantil, unindo qualidade,
                    conforto e tendências que valorizam cada estilo.
                    Porque quando você se sente bem com o que veste,
                    a felicidade aparece naturalmente.</p>

                    <img 
                        src='./images/fachada.png'
                        className='rounded-[30px] shadow-xl w-[30%] mr-[10%]  selection:bg-branco'
                    />
                </div>
            </div>

            <div className='bg-laranja w-full mt-[6%] p-5 py-10' id='catalogo'>
                <p className='justify-center flex text-branco underline italic text-2xl selection:bg-branco selection:text-laranja'>Conheça um pouco das nossas roupas</p>
                <p>oii</p>
            </div>
        </div>
    )
} 