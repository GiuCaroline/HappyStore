import { useState } from "react";

export function ProductCard({ image, title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-branco rounded-2xl shadow-md transition-all duration-300 overflow-hidden font-montserrat
      ${open ? "h-auto" : "h-[420px]"}`}
    >
      {/* Imagem */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover selection:bg-branco"
      />

      {/* Conteúdo */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-xl text-center selection:bg-laranja selection:text-branco">
          {title}
        </h3>

        <p
          className={`text-sm text-gray-600 transition-all text-center selection:bg-laranja selection:text-branco
          ${open ? "line-clamp-none" : "line-clamp-3"}`}
        >
          {description}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="text-orange-500 text-sm font-medium self-center mt-2 hover:underline  selection:bg-laranja selection:text-branco"
        >
          {open ? "Ver menos" : "Ver mais"}
        </button>
      </div>
    </div>
  );
}
