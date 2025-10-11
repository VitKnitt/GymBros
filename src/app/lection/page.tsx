import { LectionFAQ } from "./FAQ/LectionFAQ";
import { LectionCard } from "./LectionCard";
import { LectionIntro } from "./LectionIntro";
import LectionSchedule from "./LectionSchedule";
import { Lectors } from "./lectors/Lectors";



export default function NejlepsiPosilovna() {
  return (
   <section className="bg-one bg-[url('/backGround/bg1.svg')] flex flex-col justify-evenly pt-20">
      <LectionIntro />
      <div className="bg-one bg-opacity-[80%]">
      <LectionCard />
      <LectionSchedule />
      <LectionFAQ />
      <Lectors />
      </div>
    </section>
  );
}
