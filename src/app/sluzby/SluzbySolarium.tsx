import Image from "next/image";
import img1 from "../../assets/img/img.jpg";

export function SluzbySolarium() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="bg-one bg-cover bg-center flex flex-row justify-evenly flex-wrap gap-10 p-5 pb-20">
      <article className="max-w-prose p-4">
        <h2 className="text-2xl font-bold mb-3">SOLÁRIUM</h2>
        <p className="text-base leading-relaxed">Bronzová kůže 24/7 </p>
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
      <div>
        <p className="max-w-prose p-4">
          V naší posilovně můžete využít moderní stojící solárium pro efektivní
          a pohodlné opalování. Užijte si chvíle relaxace ve stoje, zatímco
          solárium pečuje o rovnoměrné opálení vaší pokožky. Máme pro vás
          připraveno toto solárium za cenu 13 Kč za minutu. Je naše solárium
          přesně to, co jste hledali pro svůj relax?
        </p>
        <div>
          <p className="border-b-4 w-[50%]"></p>
          <ul className="">
            <li key="1" className="flex flex-row gap-4 items-end pb-3">
              <div>
                <p className="">1 minuta</p>
              </div>
              <p className="price">13 Kč</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
