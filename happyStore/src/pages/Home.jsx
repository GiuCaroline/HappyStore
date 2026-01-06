import { BookOpenText  } from '@phosphor-icons/react';
import { ProductCard } from "../components/productCard";
import LocationSection from "../components/locationSection";

export default function Home(){
    return(
        <div className="font-montserrat">
            <div className="relative w-full h-auto" id='home'>
                <img 
                    src="./images/banner.jpeg"
                    className="w-full h-[50vh] md:h-[80vh] object-cover selection:bg-branco"
                />
                <div className="absolute inset-0 bg-black/40 selection:bg-branco"></div>
                <div className="absolute inset-0 flex items-center justify-start md:ml-[10%] ml-[7%] text-left">
                    <div className='flex flex-col items-start md:items-start'>
                        <h1 className="text-branco cursor-default text-4xl md:text-8xl font-italiana selection:bg-laranja selection:text-branco">Venha<br/>conhecer<br/>nossa loja!</h1>
                        <button className='selection:bg-branco selection:text-laranja flex text-branco items-center gap-3 bg-laranja rounded-full md:py-3 py-2 px-6 md:px-10 text-base md:text-xl md:mt-[4%] mt-[5%] transition duration-500 transform-cpu hover:scale-105'>
                            <BookOpenText weight='light' className='md:text-3xl text-xl'/>
                            Acesse o catálogo completo
                        </button>
                    </div>
                </div>
            </div>

            <div className='max-w-screen mx-auto'>
                <div className='md:mt-[3%] mt-[8%] px-[3%]' id='sobre'>
                    <div className='flex items-center gap-3'>
                        <div className="w-[10%] flex-1 h-[1px] dark:bg-branco bg-preto rounded-full
                        selection:bg-laranja selection:text-branco"></div>
                        <p className='dark:text-branco text-preto text-3xl
                        selection:bg-laranja selection:text-branco cursor-default'>Sobre nós</p>
                        <div className="w-[10%] flex-1 h-[1px] dark:bg-branco bg-preto rounded-full
                        selection:bg-laranja selection:text-branco"></div>
                    </div>

                    <div className='flex flex-col md:flex-row items-center md:justify-between gap-8 mt-6'>
                        <p className='dark:text-branco text-preto text-lg md:text-2xl text-center md:text-left md:ml-[5%]
                        selection:bg-laranja selection:text-branco cursor-default'>A HAPPY Store nasceu para levar mais estilo e
                        felicidade ao seu dia a dia. Trabalhamos com moda
                        feminina, masculina e infantil, unindo qualidade,
                        conforto e tendências que valorizam cada estilo.
                        Porque quando você se sente bem com o que veste,
                        a felicidade aparece naturalmente.</p>

                        <img 
                            src='./images/fachada.png'
                            className='rounded-[30px] shadow-xl w-[90%] md:w-[30%] md:mr-[10%] selection:bg-branco'
                        />
                    </div>
                </div>

                <div className='bg-laranja w-full md:mt-[6%] mt-[10%] p-5 md:py-10' id='catalogo'>
                    <p className='justify-center flex text-center cursor-default text-branco underline italic text-2xl selection:bg-branco selection:text-laranja'>Conheça um pouco das nossas roupas</p>
                    <div className="mt-[3%] grid grid-cols-1 md:grid-cols-3 md:gap-[10%] gap-[9%] max-w-xs md:max-w-6xl mx-auto">
                        <ProductCard
                        image="/images/vestido.png"
                        title="Vestido Azul"
                        description="Vestido infantil confeccionado em tecido macio e confortável, na cor azul claro com estampa delicada de poás. Possui modelagem soltinha, alças com babados e fechamento prático."
                        />

                        <ProductCard
                        image="/images/camisa-vermelha.png"
                        title="Camiseta Vermelha"
                        description="Camiseta polo infantil confeccionada em tecido macio e confortável, na cor vermelha. Possui gola tradicional com detalhes em branco e fechamento por botões."
                        />

                        <ProductCard
                        image="/images/camisa-decorada.png"
                        title="Camiseta Decorada"
                        description="Conjunto infantil confeccionado em tecido macio e confortável, composto por camiseta polo estampada com desenhos divertidos e shorts combinando."
                        />
                    </div>

                    <div className='w-full flex justify-center md:mt-[5%] mt-[35%]'>
                        <button className='selection:bg-laranja selection:text-branco
                        text-laranja bg-branco rounded-full py-4 text-base md:text-xl px-10 md:px-20 transition duration-500 transform-cpu hover:scale-105'>Veja nosso catálogo completo</button>
                    </div>
                </div>

                <div id="endereco" className='md:mt-[4%] mt-[8%] px-[3%] mb-[15%] md:mb-0'>
                    <div className='flex flex-row items-center gap-3'>
                        <p className='dark:text-branco text-preto text-3xl
                            selection:bg-laranja selection:text-branco cursor-default'>Onde estamos</p>
                        <div className="w-[10%] flex-1 h-[1px] dark:bg-branco bg-preto rounded-full
                            selection:bg-laranja selection:text-branco"></div>
                    </div>

                    <LocationSection />
                </div>
            </div>
        </div>
    )
} 