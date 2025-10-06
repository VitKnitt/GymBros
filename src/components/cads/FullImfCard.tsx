import Image, { StaticImageData } from "next/image";
import img from "../../assets/img/img.jpg";

type CardItem = {
  title: string;
  description: string;
  path: StaticImageData;
  alt: string;
};

export function FullImageCard() {
  const cards: CardItem[] = [
    {
      title: "Motivace",
      description: "Najdi sílu začít každý den s novou energií.",
      path: img,
      alt: "Motivační obrázek",
    },
    {
      title: "Trénink",
      description: "Trénuj chytře, ne tvrdě. Každý pohyb se počítá.",
      path: img,
      alt: "Tréninkový obrázek",
    },
    {
      title: "Výsledky",
      description: "Úspěch přichází s disciplínou a vytrvalostí.",
      path: img,
      alt: "Obrázek výsledků",
    },
    {
      title: "Odpočinek",
      description: "Regenerace je klíč k růstu — nezapomínej na ni.",
      path: img,
      alt: "Obrázek odpočinku",
    },
  ];

  return (
    <section
      aria-label="Features"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
    >
      {cards.map((card, index) => (
        <article
          key={index}
          className="relative flex flex-col justify-end items-center w-[300px] h-[300px] rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          {/* Pozadí */}
          <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-110">
            <Image
              src={card.path}
              alt={card.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 transition-colors duration-700 group-hover:from-black/80 group-hover:via-black/40" />

          {/* Obsah */}
          <div className="relative z-20 p-5 text-center text-white transition-transform duration-700 group-hover:translate-y-[-5px]">
            <h2 className="text-2xl font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm">{card.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
