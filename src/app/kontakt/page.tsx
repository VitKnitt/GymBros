import { IntroKontakt } from "./IntroKontakt";
import KontactForm from "./KontaktForm";
import { KontaktMap } from "./KontaktMap";
import KontaktOpening from "./KontaktOpening";

export default function Kontakt() {
  return (
    <section className="bg-one bg-[url('/backGround/bg4.svg')] flex flex-col justify-evenly">
      <IntroKontakt />
      <div className="bg-one bg-opacity-[80%]">
        <KontaktMap />
        <div className="flex flex-wrap gap-10 justify-center pb-20">
          <KontactForm />
          <KontaktOpening />
        </div>
      </div>
    </section>
  );
}
