import React from "react";

type CardItem = {
  title: string;
  description: string;
  text1: string;
  text2: string;
};

export function LectionCard() {
  const cards: CardItem[] = [
    {
      title: "BODY & MIND LEKCE",
      description: "Nízká intenzita",
      text1: "Pilates",
      text2:
        "Po uspěchaném dni či týdnu zklidnit mysl, soustředit se na svůj dech, procítit každý pohyb. Lekce Pilates není zdarma v rámci vstupu, ceník naleznete v informacích níže.",
    },
    {
      title: "POSILOVACÍ LEKCE",
      description: "Střední intenzita",
      text1: "Push&Pull, Břicho a pozadí, Kruhový trénink	",
      text2:
        "Procvičit všechny svaly během 60 minut? Žádný problém. Parta okolo vás navíc namotivuje být lepší, zkušený trenér zase opraví.",
    },
    {
      title: "KARDIO LEKCE",
      description: "Vysoká intenzita",
      text1: "Wake up & sweat, Spinning, Full Body Sculpt",
      text2:
        "Jak si oblíbit kardio? O samotě na trenažérech to nebude. Dejte šanci kardio lekcím. Hodinka uteče, ani nevíte jak.",
    },
  ];

  return (
    <section
      aria-label="Features"
      className=" p-16"
    >
      <article className="max-w-prose p-4 pl-0 sm:pl-[10%]">
        <h2 className="text-5xl font-bold mb-3 text-three">VYBERTE SI LEKCI</h2>
        <p className="text-base leading-relaxed">
          Na čem společně zapracujeme? Na síle, kondičce, flexibilitě, tanečních
          kreacích nebo na všem dohromady?
        </p>
      </article>
      <div className="flex gap-10 justify-center">
        {cards.map((feature, index) => (
          <article
            key={index}
            className="border-2 rounded-xl border-two p-5 bg-one max-w-[320px]"
          >
            <div className="flex flex-col items-start justify-between  pb-8">
              <h2 className="text-4xl text-three">{feature.title}</h2>
              <p className="text-xl">{feature.description}</p>
              <p>{feature.text1}</p>
              <p>{feature.text2}</p>
              <button>rezervovat lekci</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
