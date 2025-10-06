import FAQ from "./FAQ";

export function IntroFAQ() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="bg-five bg-cover bg-center flex justify-evenly flex-wrap gap-10 p-5 pb-20">
      <article className="max-w-prose p-4 flex flex-col">
        <h2 className="text-5xl font-bold text-one mb-3 pb-3">ČASTO KLADENÉ DOTAZY</h2>
        <p className="text-base leading-relaxed text-one pb-3">
          Je něco, na co byste se nás chtěli zeptat? Směle do toho! Mrkněte ale
          nejdříve sem, jestli už jsme někomu na podobnou otázku neodpovídali
          dříve.
        </p>
      <div>
        <FAQ question={"Je NRG Fitness pouze klubové fitness? "} answer={"Ne, není. V NRG Fitness si můžete zakoupit jak jednorázový vstup, tak i různé typy členství bez závazku."} />
        <FAQ question={"Jaké u nás platí pravidla? "} answer={" Veškeré naše pravidla naleznete zde – Pravidla NRG FITNESS"} />
        <FAQ question={"Přijímáte MultiSport či ActivePass karty? "} answer={"Ano. Na MultiSportku či ActivePass kartu můžete využít posilovnu, zajít si na lekci i využít saunu bezplatně v časovém limitu 120 minut. Za každých dalších započatých 10 minut se doplácí 20 Kč."} />
        <FAQ question={"Musím se rezervovat na skupinové lekce? "} answer={"Ano, ale je to jednoduché. Rezervaci můžete provést dvěma způsoby: A) osobně na recepci, a to nejpozději 30 minut před zahájením lekce B) přes online rezervační systém a mobilní aplikaci Předchozí osobní nebo telefonické rezervace nepřijímáme. Pro vytvoření online rezervace je potřeba mít bezplatný zákaznický účet a kredit nejméně 60 Kč na každou rezervovanou lekci."} />
        <FAQ question={"Jak je to se saunou? "} answer={"V klubu máme celkem 3 finské sauny: jednu jen pro muže, druhou výhradně pro ženy a třetí společnou, a to včetně odpočívárny. Po sauně se můžete zchladit pouze studenou sprchou. Do sauny se není potřeba rezervovat a je zdarma pro každý typ vstupu."} />
      </div>
      </article>
    </section>
  );
}
