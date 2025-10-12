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
      title: "Posilovna",
      description:
        "Potřebuješ prostor pro pořádný trénink? Činky, hrazdy, klece i stroje – máme všechno, co ti pomůže růst.",
      path: e,
      alt: "Trénink v posilovně Gym-Bros",
    },
    {
      title: "Lekce",
      description:
        "Ve dvou se to lépe táhne, ve skupině nejlíp. Přidej se na naše lekce a zažij energii Gym-Bros týmu.",
      path: m1,
      alt: "Skupinová fitness lekce Gym-Bros",
    },
    {
      title: "Služby",
      description:
        "U nás to tréninkem nekončí. Nabízíme regeneraci, výživové poradenství i osobní tréninky na míru.",
      path: g,
      alt: "Služby a doplňkové programy Gym-Bros Fitness",
    },
  ];

  return (
    <section aria-label="Features" className="flex justify-evenly flex-wrap gap-4 mt-8">
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
              unoptimized
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
