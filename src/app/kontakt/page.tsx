import { IntroKontakt } from "./IntroKontakt";
import KontactForm from "./KontaktForm";
import { KontaktMap } from "./KontaktMap";
import KontaktOpening from "./KontaktOpening";

export default function Kontakt() {
  return (
    <section className="bg-one flex flex-col justify-evenly py-20">
      <IntroKontakt />
      <KontaktMap />
      <div className="flex flex-wrap gap-10 justify-evenly">
        <KontactForm />
        <KontaktOpening />
      </div>
    </section>
  );
}
