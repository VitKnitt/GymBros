import NejlepsiGallery from "./NejlepsiGallery";
import { NejlepsiIntro } from "./NejlepsiIntro";
import { NejlepsiText } from "./NejlepsiText";


export default function NejlepsiPosilovna() {
  return (
   <section className="bg-one flex flex-col justify-evenly py-20">
    <NejlepsiIntro />
    <NejlepsiText />
    <NejlepsiGallery />
    </section>
  );
}
