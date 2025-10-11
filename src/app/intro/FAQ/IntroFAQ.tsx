import FAQ from "./FAQ";

export function IntroFAQ() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="flex justify-center flex-wrap gap-10 p-5 pb-20">
      <article className="max-w-prose p-4 flex flex-col items-center">
        <h2 className="text-5xl font-bold text-three mb-3 pb-3">
          ČASTO KLADENÉ DOTAZY
        </h2>
        <p className="text-base leading-relaxed text-five pb-3">
          Máš dotaz? Super — jsme tu pro tebe! Ale mrkni nejdřív sem, možná už
          jsme na tvoji otázku odpovídali.
        </p>

        <div>
          <FAQ
            question="Je Gym-Bros Fitness jen pro členy?"
            answer="Ne, vůbec ne! Můžeš si koupit jednorázový vstup nebo si vybrat členství bez závazku. Trénuj, jak ti to vyhovuje."
          />
          <FAQ
            question="Jaká pravidla u vás platí?"
            answer="Držíme se jednoduchých zásad – respekt, čistota a ohleduplnost. Kompletní pravidla najdeš na recepci nebo online."
          />
          <FAQ
            question="Berete MultiSport nebo ActivePass karty?"
            answer="Ano! S kartou MultiSport nebo ActivePass můžeš využít posilovnu, skupinové lekce i saunu – bez doplatku do 120 minut. Každých dalších 10 minut stojí 20 Kč."
          />
          <FAQ
            question="Musím si rezervovat místo na skupinové lekce?"
            answer="Ano, ale zabere to pár vteřin. Můžeš se přihlásit online přes náš rezervační systém nebo osobně na recepci (nejpozději 30 minut před začátkem). Stačí mít účet a kredit alespoň 60 Kč."
          />
          <FAQ
            question="Jak funguje sauna?"
            answer="Máme tři finské sauny – pánskou, dámskou a společnou s odpočívárnou. Sauna je zdarma ke všem typům vstupů, bez nutnosti rezervace. Po sauně doporučujeme osvěžit se studenou sprchou!"
          />
        </div>
      </article>
    </section>
  );
}
