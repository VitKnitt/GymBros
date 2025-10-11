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
      "Jóga a pilates pro sílu i flexibilitu. Lucie tě naučí ovládnout střed těla a najít vnitřní rovnováhu.",
  },
  {
    path: lect2,
    alt: "trener-dusan",
    text: "Dušan Knodd",
    description:
      "Mistr silového tréninku a Pumpa lekcí. Dušan tě posune v technice, výbušnosti a motivaci na maximum.",
  },
  {
    path: lect3,
    alt: "trener-petr",
    text: "Petr Veselý",
    description:
      "Kruhové a funkční tréninky plné energie. Petrův styl je dynamický, zábavný a perfektní pro celkovou kondici.",
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
            <p className="text-five font-bold font-bold text-2xl">
              {item.text}
            </p>
            <p className="text-five font-medium text-lg max-w-[200px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
