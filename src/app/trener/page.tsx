import { TrenerIntro } from "./TrenerIntro";
import { TrenerJarda } from "./TrenerJarda";
import { TrenerKarel } from "./TrenerKarel";

export default function Intro() {
  return (
    <section className="bg-one flex flex-col justify-evenly py-20">
      <TrenerIntro />
       <article className="max-w-prose p-4">
      <h2 className="text-2xl font-bold mb-3">NAŠI TRENÉŘI</h2>
      <p className="text-base leading-relaxed">
        Seznamte se!</p>
    </article>
    <TrenerKarel />
    <TrenerJarda />
    </section>
  );
}
