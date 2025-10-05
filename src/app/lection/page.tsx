import { LectionFAQ } from "./FAQ/LectionFAQ";
import { LectionCard } from "./LectionCard";
import { LectionIntro } from "./LectionIntro";
import LectionSchedule from "./LectionSchedule";
import { LectionText } from "./LectionText";
import { Lectors } from "./lectors/Lectors";



export default function NejlepsiPosilovna() {
  return (
   <section className="bg-one flex flex-col justify-evenly py-20">
      <LectionIntro />
      <LectionText />
      <LectionCard />
      <LectionSchedule />
      <LectionFAQ />
      <Lectors />
    </section>
  );
}
