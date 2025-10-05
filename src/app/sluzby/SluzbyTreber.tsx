import Image from "next/image";
import img1 from "../../assets/img/img.jpg";

export function SluzbyTreber() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="bg-one bg-cover bg-center flex flex-row justify-evenly flex-wrap gap-10 p-5 pb-20">
      <article className="max-w-prose p-4">
        <h2 className="text-2xl font-bold mb-3">OSOBNÍ TRÉNINK S TRENÉREM</h2>
        <p className="text-base leading-relaxed">Trénujte chytře a správně</p>
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
          Naučte se cvičit tak, abyste si neublížili a posouvejte se za hezčím
          tělem i lepším zdravím rychleji a efektivněji. Osobní trenér totiž
          není výsadou milionářů nebo profesionálních sportovců. Alespoň pár
          tréninků s trenérem by měl naopak absolvovat každý. Osobní trénink si
          můžete zarezervovat telefonicky, kontaktním formulářem nebo osobně na
          recepci NRG fitness.
        </p>
        <div>
          <p className="border-b-4 w-[50%]"></p>
          <ul className="">
            <li key="1" className="flex flex-row gap-4 items-end pb-3">
              <div>
                <p className="">60 minut</p>
              </div>
              <p className="price">600 Kč</p>
            </li>
            <li key="2" className="flex flex-row gap-4 items-end pb-3">
              <div>
                <p className="">11 tréninků</p>
              </div>
              <p className="price">5499 Kč</p>
            </li>
            <li key="3" className="flex flex-row gap-4 items-end pb-3">
              <div>
                <p className="">Trénink ve dvou</p>
              </div>
              <p className="price">450 Kč / osoba</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
