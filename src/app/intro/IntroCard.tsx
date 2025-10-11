import Image, { StaticImageData } from "next/image";
import g from "../../assets/img/g.png";
import e from "../../assets/img/e.jpg";
import m1 from "../../assets/img/m1.jpg";

type CardItem = {
  title: string;
  description: string;
  path: StaticImageData; // typ pro importované obrázky
  alt: string;
};

export function IntroCard() {
  const cards: CardItem[] = [
    {
      title: "posilovna",
      description:
        "potřebujete pro svůj trénink stroje, činky, klece, hrazdy, klid? Máme vše!",
      path: e,
      alt: "img",
    },
    {
      title: "lekce",
      description:
        "Ve dvou se to lépe táhne, ve skupině nejlépe. Jaké lekce u nás najdete?",
      path: m1,
      alt: "img",
    },
    {
      title: "služby",
      description:
        "Posilovnou to u nás nekončí. Jaké další parády nabízíme a za kolik?",
      path: g,
      alt: "img",
    },
   
  ];

  return (
    <section
      aria-label="Features"
      className="flex justify-evenly wrap -mt-8"
    >
      {cards.map((feature, index) => (
        <article
          key={index}
          className="flex flex-col justify-center items-center w-[320px] rounded-xl shadow-2xl shadow-shadow border-b-4 pb-3"
        >
          <div className="relative w-full h-40">
            <Image
              src={feature.path}
              alt={feature.alt}
              className="object-cover rounded-t-xl"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          <div className="p-5">
            <h2 className="text-3xl">{feature.title}</h2>
            <p className="mt-2">{feature.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
