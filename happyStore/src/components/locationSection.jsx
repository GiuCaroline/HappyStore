import { WhatsappLogo, MapPinArea, Sparkle } from "@phosphor-icons/react"

export default function LocationSection() {
  const address =
    "R. Princesa Isabel, 328 - Vila Bocaina, Mauá - SP";

  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="dark:bg-[#252525] bg-[#F3F3F3] w-full mt-[2%] rounded-[30px] px-[4%] text-white py-[2%]
     rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 font-montserrat shadow-xl mb-[5%]">
      
      {/* TEXTO */}
      <div className="flex flex-col gap-4">
        <h3 className="text-laranja font-medium underline text-2xl cursor-default
          selection:text-branco selection:bg-laranja">
          Endereço
        </h3>

        <p className="text-xl dark:text-branco text-preto cursor-default
          selection:dark:text-laranja selection:dark:bg-branco
          selection:text-branco selection:bg-laranja">
          {address}
        </p>

        <h3 className="text-laranja font-medium underline text-2xl mt-4 cursor-default
          selection:text-branco selection:bg-laranja">
          Horário de funcionamento
        </h3>

        <p className="text-xl dark:text-branco text-preto cursor-default
          selection:dark:text-laranja selection:dark:bg-branco
          selection:text-branco selection:bg-laranja">
          Seg à sex das 10:00h às 18:30h <br />
          Sáb das 10:00h às 17:30h
        </p>

        {/* BOTÕES */}
        <div className="flex flex-col gap-3 mr-[2%] mt-[3%] bg-laranja rounded-[30px] py-5 px-2">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/551143094666?text=${encodeURIComponent(
              "Olá! Gostaria de saber mais sobre a loja!"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-laranjaEscuro transition text-branco px-6 py-3 text-lg flex items-center justify-start gap-2
          selection:text-laranja selection:bg-branco"
          >
            <WhatsappLogo size={35}/>
            Entrar em contato conosco
          </a>

          {/* Como chegar */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-branco hover:text-laranjaEscuro transition text-lg px-6 py-3 rounded-xl flex items-center justify-start gap-2
          selection:text-laranja selection:bg-branco"
          >
            <MapPinArea size={35}/>
            Como chegar
          </a>
        </div>

      </div>

      {/* MAPA */}
      <div className="w-full h-full rounded-2xl overflow-hidden mt-[2%]">
        <iframe
          title="Mapa"
          src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
          className="w-full h-full border-0 selection:bg-laranja"
          loading="lazy"
        ></iframe>
      </div>
      
        <p className="w-[200%] text-xl dark:text-branco text-preto flex gap-1 items-center cursor-default
          selection:dark:text-laranja selection:dark:bg-branco
          selection:text-branco selection:bg-laranja">
          Esperamos você para conhecer nossa coleção e sair vestindo
          <span className="text-laranja flex gap-2 items-center
          selection:text-branco selection:bg-laranja"> felicidade <Sparkle size={25} /></span>
        </p>
    </section>
  );
}
