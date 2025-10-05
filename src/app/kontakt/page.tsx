import KontactForm from "./KontaktForm";
import KontaktOpening from "./KontaktOpening";

export default function Kontakt() {
  return (
   <section className="bg-one flex flex-col justify-evenly py-20">
      <KontactForm />
      <KontaktOpening />
    </section>
  );
}
