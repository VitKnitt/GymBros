import LectorImg from "./LectorImg";
import { LectorsText } from "./LectorsText";

export function Lectors() {
 //bg-fixed
 //bg-[url('/backGround/cccoil.svg')]
  return <section className="flex flex-col items-center justify-evenly flex-wrap gap-10 pt-20">
    <LectorsText />
    <LectorImg />
      </section>;
}
