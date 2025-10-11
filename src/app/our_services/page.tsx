import { IntroSluzby } from "./IntroSluzby";
import { SluzbyMasaze } from "./SluzbyMasaze";
import { SluzbyPoradentstvi } from "./SluzbyPoradentstvi";
import { SluzbySauna } from "./SluzbySauna";
import { SluzbySolarium } from "./SluzbySolarium";
import { SluzbyTreber } from "./SluzbyTreber";



export default function Intro() {
  return (
   <section className="bg-one bg-[url('/backGround/bg2.svg')] flex flex-col justify-evenly pt-20">
    <IntroSluzby />
    <div className="bg-one bg-opacity-[80%]">
    <SluzbySauna />
    <SluzbyTreber />
    <SluzbyPoradentstvi />
    <SluzbyMasaze />
    <SluzbySolarium />
    </div>
    </section>
  );
}
