export default function LocationSection() {
  const address =
    "R. Princesa Isabel, 328 - Vila Bocaina, Mauá - SP";

  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="dark:bg-[#252525] bg-[#F3F3F3] w-full mt-[2%] rounded-[30px] px-[2%] text-white p-10
     rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 font-montserrat shadow-xl">
      
      {/* TEXTO */}
      <div className="flex flex-col gap-4">
        <h3 className="text-laranja font-medium underline text-2xl">
          Endereço
        </h3>

        <p className="text-xl dark:text-branco text-preto">
          {address}
        </p>

        <h3 className="text-laranja font-medium underline text-2xl mt-4">
          Horário de funcionamento
        </h3>

        <p className="text-xl dark:text-branco text-preto">
          Seg à sex das 10:00h às 18:30h <br />
          Sáb das 10:00h às 17:30h
        </p>

        {/* BOTÕES */}
        <div className="flex flex-col gap-3 mt-4 bg-laranja">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/5511999999999?text=${encodeURIComponent(
              "Olá! Gostaria de saber mais sobre a coleção 😊"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:bg-orange-600 transition text-branco px-6 py-3 rounded-xl flex items-center justify-start gap-2"
          >
            Entrar em contato conosco
          </a>

          {/* Como chegar */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-6 py-3 rounded-xl flex items-center justify-center gap-2"
          >
            Como chegar
          </a>
        </div>

        <p className="text-xs dark:text-branco text-preto mt-4">
          Esperamos você para conhecer nossa coleção e sair vestindo
          <span className="text-laranja"> felicidade sparks</span>
        </p>
      </div>

      {/* MAPA */}
      <div className="w-[95%] h-full rounded-2xl overflow-hidden mt-[2%]">
        <iframe
          title="Mapa"
          src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
