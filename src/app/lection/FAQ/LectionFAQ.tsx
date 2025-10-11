import FAQ from "./FAQ";

export function LectionFAQ() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="flex flex-col items-center justify-evenly flex-wrap gap-10 p-5 pt-20 pb-20">
      <article className="max-w-prose p-4">
        <h2 className="text-4xl font-bold mb-3">ČASTO KLADENÉ DOTAZY</h2>
        <p className="text-base text-xl leading-relaxed">
          Je něco, na co byste se nás chtěli zeptat? Směle do toho! Mrkněte ale
          nejdříve sem, jestli už jsme někomu na podobnou otázku neodpovídali
          dříve.
        </p>
      </article>
      <div>
        <FAQ question={"Kolik stojí lekce? "} answer={"Nula. Všechny lekce máte v ceně vstupu či permanentky."} />
        <FAQ question={"Kolik stojí lekce Pilates? "} answer={"Jednorázový vstup: 260 Kč Cena zahrnuje také vstup do fitka na celý den – po lekci si tak můžeš kdykoliv zacvičit. Multisport karta: doplatek 150 Kč Na lekci se vztahuje běžné 2hodinové pravidlo Multisportu. Pilates je však nadstandardní lekce, a proto je nutné uhradit doplatek 150 Kč. Permanentka (1, 3, 12 měsíců): doplatek 150 Kč Pokud máš aktivní členství ve formě permanentky, stačí uhradit doplatek 150 Kč a lekce je ti plně dostupná."} />
        <FAQ question={"Jak si můžu zarezervovat lekci? "} answer={"Úplně jednoduše a ještě si můžete vybrat ze dvou způsobů: A) osobně na recepci, a to nejpozději 30 minut před zahájením lekce B) přes online rezervační systém a mobilní aplikaci"} />
        <FAQ question={"Můžu s permanentkou navštívit i více lekcí v jeden den? "} answer={"Ano, můžete."} />
        <FAQ question={"Co když chci lekci zrušit? "} answer={"Ozvěte se nám na +420 941 501 283 a domluvíme se."} />
      </div>
    </section>
  );
}
