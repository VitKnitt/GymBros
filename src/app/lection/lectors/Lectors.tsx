import LectorImg from "./LectorImg";
import { LectorsText } from "./LectorsText";

export function Lectors() {
 //bg-fixed
 //bg-[url('/backGround/cccoil.svg')]
  return <section className="bg-five bg-cover bg-center flex justify-evenly flex-wrap gap-10 p-5 pb-20">
    <LectorsText />
    <LectorImg />
      </section>;
}
