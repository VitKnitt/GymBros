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
      title: "BODY & MIND",
      description: "Nízká intenzita",
      text1: "Pilates, Stretch & Relax, Core Balance",
      text2:
        "Zpomal, zhluboka se nadechni a dej tělu prostor k regeneraci. Tyhle lekce ti pomohou zklidnit mysl, zlepšit držení těla a načerpat novou energii.",
    },
    {
      title: "POSILOVACÍ LEKCE",
      description: "Střední intenzita",
      text1: "Push & Pull, Core Attack, Kruhový trénink",
      text2:
        "Pořádná síla, kontrola a motivace. V 60 minutách procvičíš celé tělo. Zkušení trenéři tě povedou a parta kolem tě nenechá povolit.",
    },
    {
      title: "KARDIO LEKCE",
      description: "Vysoká intenzita",
      text1: "Wake Up & Sweat, Spinning, Full Body Burn",
      text2:
        "Rychlé tempo, silná energie a spalování na maximum. Když makáš ve skupině, kardio tě začne fakt bavit.",
    },
  ];

  return (
    <section aria-label="Lekce" className="p-16">
      <article className="max-w-prose p-4 pl-0 sm:pl-[10%]">
        <h2 className="text-5xl font-bold mb-3 text-three">VYBER SI LEKCI</h2>
        <p className="text-base leading-relaxed text-four">
          Chceš zlepšit kondici, sílu nebo zrelaxovat po náročném dni?  
          Máme lekce pro každého — stačí si vybrat tu svoji.
        </p>
      </article>

      <div className="flex flex-wrap gap-10 justify-center">
        {cards.map((feature, index) => (
          <article
            key={index}
            className="border-2 rounded-xl border-two p-6 bg-one max-w-[320px] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold text-three">{feature.title}</h2>
              <p className="text-lg font-semibold text-five">{feature.description}</p>
              <p className="font-medium">{feature.text1}</p>
              <p className="text-sm text-four">{feature.text2}</p>
            </div>

            <button className="mt-6 w-full py-2 bg-three text-one font-semibold rounded-lg hover:bg-two hover:text-three transition-colors">
              Rezervovat lekci
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

