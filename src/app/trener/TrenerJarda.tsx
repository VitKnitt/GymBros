import Image from "next/image";
import img1 from "../../assets/img/img.jpg";

export function TrenerJarda() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="bg-one bg-cover bg-center flex flex-row justify-evenly flex-wrap gap-10 p-5 pb-20">
      <article className="max-w-prose p-4">
        <h2 className="text-2xl font-bold mb-3">Klárka Skulínková</h2>
        <p className="text-base leading-relaxed">
          Klárka je osobní trenérka s několikaletou praxí, která se zaměřuje na
          individuální tréninky přizpůsobené potřebám každého klienta – ať už
          jde o začátečníka, nebo pokročilého sportovce. Ve své práci kombinuje
          moderní přístupy ke cvičení s důrazem na zdravý pohyb a dlouhodobou
          udržitelnost. Kromě osobních tréninků se věnuje také pilates, který
          pomáhá propojit sílu, stabilitu a vnitřní rovnováhu. Klárka vytváří
          přátelské a motivující prostředí, kde se každý může cítit dobře a
          posouvat se vpřed. Pro více informací – telefonní číslo +420 608 334
          122
        </p>
      </article>
      <div className="relative w-40 h-40">
        <Image
          src={img1}
          alt=""
          className="object-cover rounded-t-xl"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
    </section>
  );
}
