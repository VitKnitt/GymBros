import FAQ from "./FAQ";

export function LectionFAQ() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="flex flex-col items-center justify-evenly flex-wrap gap-10 p-5 pt-20 pb-20">
      <article className="max-w-prose p-4 text-center">
        <h2 className="text-4xl font-bold mb-3 text-three">ČASTÉ DOTAZY</h2>
        <p className="text-base text-xl leading-relaxed text-five">
          Máš otázku? Super — jsme tu pro tebe! Ale než nám napíšeš, mrkni,
          jestli už tu odpověď náhodou nemáme.
        </p>
      </article>

      <div>
        <FAQ
          question="Kolik stojí lekce?"
          answer="Všechny skupinové lekce máš v ceně vstupu nebo permanentky.  
                  Žádné příplatky – jen čistá motivace."
        />

        <FAQ
          question="Kolik stojí lekce Pilates?"
          answer={`Pilates je nadstandardní lekce s doplatkem 150 Kč.  
                  Jednorázový vstup: 260 Kč (včetně neomezeného vstupu do fitka na celý den).  
                  MultiSport karta: doplatek 150 Kč.  
                  Permanentka (1, 3, 12 měsíců): doplatek 150 Kč.`}
        />

        <FAQ
          question="Jak si můžu zarezervovat lekci?"
          answer={`Jednoduše!  
                  A) Osobně na recepci – nejpozději 30 minut před začátkem.  
                  B) Online přes náš rezervační systém nebo mobilní aplikaci.  
                  Pohodlně, odkudkoliv.`}
        />

        <FAQ
          question="Můžu s permanentkou navštívit víc lekcí za den?"
          answer="Jasně, můžeš klidně i víc – podle chuti a sil!"
        />

        <FAQ
          question="Co když potřebuju lekci zrušit?"
          answer="Stačí nám napsat nebo zavolat na +420 941 501 283 a domluvíme se.  
                  Život se děje — my to chápeme."
        />
      </div>
    </section>
  );
}
