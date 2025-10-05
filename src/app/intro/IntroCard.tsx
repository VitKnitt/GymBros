import Image, { StaticImageData } from "next/image";
import img from "../../assets/img/img.jpg";

type CardItem = {
  title: string;
  description: string;
  path: StaticImageData; // typ pro importované obrázky
  alt: string;
};

export function IntroCard() {
  const cards: CardItem[] = [
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      path: img,
      alt: "img",
    },
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      path: img,
      alt: "img",
    },
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      path: img,
      alt: "img",
    },
   
  ];

  return (
    <section
      aria-label="Features"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
    >
      {cards.map((feature, index) => (
        <article
          key={index}
          className="flex flex-col justify-center items-center w-[300px] rounded-xl shadow-2xl shadow-shadow"
        >
          <div className="relative w-full h-40">
            <Image
              src={feature.path}
              alt={feature.alt}
              className="object-cover rounded-t-xl"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl">{feature.title}</h2>
            <p className="mt-2">{feature.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
