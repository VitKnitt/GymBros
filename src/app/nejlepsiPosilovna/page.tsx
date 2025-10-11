import NejlepsiGallery from "./NejlepsiGallery";
import { NejlepsiIntro } from "./NejlepsiIntro";
import { NejlepsiText } from "./NejlepsiText";

export default function NejlepsiPosilovna() {
  return (
    <section className="bg-one bg-[url('/backGround/bg1.svg')] flex flex-col justify-evenly py-20">
      <NejlepsiIntro />
      <div className="bg-one bg-opacity-[80%]">
        <NejlepsiText />
        <NejlepsiGallery />
      </div>
    </section>
  );
}
