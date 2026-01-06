import { Heart, CaretRight, WhatsappLogo, InstagramLogo, FacebookLogo, Copyright } from "@phosphor-icons/react"

export default function Footer(){
    return(
        <footer id="footer" className="bg-laranjaEscuro text-branco font-montserrat p-[1%] px-[3%]">
            
            {/* CONTAINER PRINCIPAL */}
            <div className="
                flex flex-col gap-8 text-center
                lg:flex-row lg:justify-start lg:gap-[18%] lg:text-left
            ">

                {/* COLUNA 1 */}
                <div className="flex-row lg:ml-[1%]">
                    <a href='#home'>
                        <img
                            src="./images/logo.png"
                            className="cursor-pointer w-[55%] mx-auto lg:mx-0 selection:bg-branco"
                        />
                    </a>

                    <div className="flex justify-center lg:justify-start">
                        <p className="font-italiana text-xl cursor-default selection:bg-branco selection:text-laranja">
                            Vestindo felicidade para toda a família
                        </p>
                        <Heart size={25} weight="fill" className="text-laranja"/>
                    </div>

                    <div className="mt-[6%]">
                        <p className="underline text-branco text-2xl cursor-default selection:bg-branco selection:text-laranja">
                            Links Rápidos
                        </p>

                        <div className="mt-[3%]">
                            <a href='#home'>
                                <li className="flex justify-center lg:justify-start items-center list-none hover:text-laranja text-branco text-base">
                                    <CaretRight /> Início
                                </li>
                            </a>
                            <a href='#sobre'>
                                <li className="flex justify-center lg:justify-start items-center list-none hover:text-laranja text-branco text-base">
                                    <CaretRight /> Sobre
                                </li>
                            </a>
                            <a href='#catalogo'>
                                <li className="flex justify-center lg:justify-start items-center list-none hover:text-laranja text-branco text-base">
                                    <CaretRight /> Catálogo
                                </li>
                            </a>
                            <a href='#endereco'>
                                <li className="flex justify-center lg:justify-start items-center list-none hover:text-laranja text-branco text-base">
                                    <CaretRight /> Endereço
                                </li>
                            </a>
                        </div>
                    </div>
                </div>

                {/* COLUNA 2 */}
                <div className="text-center flex-row justify-center">
                    <p className="underline text-branco text-2xl cursor-default selection:bg-branco selection:text-laranja">
                        Contatos
                    </p>

                    <p className="mt-[7%] text-base cursor-default selection:bg-branco selection:text-laranja">
                        R. Princesa Isabel 328, Vila<br/>Bocaina, Mauá - SP
                    </p>

                    <div className="mt-[5%] flex justify-center items-center">
                        <a 
                            href={`https://wa.me/551143094666?text=${encodeURIComponent(
                                "Olá! Gostaria de saber mais sobre a loja!"
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-branco hover:text-laranja"
                        >
                            <WhatsappLogo size={25} />
                            <p className="text-base selection:bg-branco selection:text-laranja">
                                Nos chame no Whatsapp
                            </p>
                        </a>
                    </div>

                    <p className="mt-[10%] underline text-branco text-xl cursor-default selection:bg-branco selection:text-laranja">
                        Horário de funcionamento
                    </p>

                    <p className="mt-[7%] text-base cursor-default selection:bg-branco selection:text-laranja">
                        Seg á sex das 10:00h ás 18:30h<br/>
                        Sáb das 10:00h às 17:30h
                    </p>
                </div>

                {/* COLUNA 3 */}
                <div className="text-center flex-row justify-center lg:ml-[5%]">
                    <p className="underline text-branco text-2xl cursor-default selection:bg-branco selection:text-laranja">
                        Redes Sociais
                    </p>

                    <a
                        href="https://www.instagram.com/lojamodahappystore/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-branco hover:text-laranja mt-[10%]"
                    >
                        <InstagramLogo size={28}/>
                        <p className="text-base">@lojamodahappystore</p>
                    </a>

                    <a
                        href={`https://wa.me/551143094666?text=${encodeURIComponent(
                            "Olá! Gostaria de saber mais sobre a loja!"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-branco hover:text-laranja mt-[7%]"
                    >
                        <WhatsappLogo size={28}/>
                        <p className="text-base">Fale conosco</p>
                    </a>

                    <a
                        href="https://www.facebook.com/happystoremoda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-branco hover:text-laranja mt-[7%]"
                    >
                        <FacebookLogo size={28}/>
                        <p className="text-base">@happystoremoda</p>
                    </a>
                </div>
            </div>

            {/* RODAPÉ FINAL */}
            <div className="justify-center items-center mt-6">
                <a
                    href="https://github.com/GiuCaroline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center text-branco"
                >
                    <p className="text-sm">Desenvolvido por Giulia Caroline</p>
                </a>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                    <Copyright size={25} />
                    <p className="text-lg cursor-default selection:bg-branco selection:text-laranja">
                        2025 HAPPY Store • Todos os direitos reservados
                    </p>
                </div>
            </div>
        </footer>
    )
}
