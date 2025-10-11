import Image from "next/image";
import lect1 from "../../../assets/img/canvas.png";
import lect2 from "../../../assets/img/canvas2.png";
import lect3 from "../../../assets/img/canvas3.png";

const elements = [
  {
    path: lect1,
    alt: "trenerka-lucie",
    text: "Lucie Králová",
    description:
      "Instruktorka jógy a pilatesu. Pomáhá klientům zlepšit flexibilitu, sílu středu těla a duševní rovnováhu.",
  },
  {
    path: lect2,
    alt: "trener-dusan",
    text: "Dušan Knodd",
    description:
      "Silový trenér a instruktor Pumpa tréninků. Zaměřuje se na správnou techniku, výbušnost a motivaci ve skupině.",
  },
  {
    path: lect3,
    alt: "trener-petr",
    text: "Petr Veselý",
    description:
      "Specialista na kruhové tréninky a funkční cvičení. Jeho lekce jsou dynamické, pestré a zaměřené na celkovou kondici.",
  },
];

export default function LectorImg() {
  return (
    <section className="max-w-7xl mx-auto pt-6 flex gap-6 justify-center flex-wrap">
      {elements.map((item, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative h-[20rem] w-[300px]">
            <Image
              src={item.path}
              alt={item.alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="p-4 flex flex-col justify-start">
            <p className="text-five font-bold font-bold text-2xl">{item.text}</p>
            <p className="text-five font-medium text-lg max-w-[200px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
