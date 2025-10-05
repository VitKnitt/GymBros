import { IntroSluzby } from "./IntroSluzby";
import { SluzbyMasaze } from "./SluzbyMasaze";
import { SluzbyPoradentstvi } from "./SluzbyPoradentstvi";
import { SluzbySauna } from "./SluzbySauna";
import { SluzbySolarium } from "./SluzbySolarium";
import { SluzbyTreber } from "./SluzbyTreber";



export default function Intro() {
  return (
   <section className="bg-one flex flex-col justify-evenly py-20">
    <IntroSluzby />
    <SluzbySauna />
    <SluzbyTreber />
    <SluzbyPoradentstvi />
    <SluzbyMasaze />
    <SluzbySolarium />
    </section>
  );
}
