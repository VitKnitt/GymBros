import Image from "next/image";
import img1 from "../../assets/img/trainWithTrener.jpg";

export function SluzbyTreber() {
  return (
    <section className="flex flex-row justify-start flex-wrap gap-10 p-5 pb-20 pl-0 sm:pl-[10%]">
      <article className="max-w-prose p-4">
        <h2 className="text-5xl font-bold mb-3 text-three">
          OSOBNÍ TRÉNINK S TRENÉREM
        </h2>
        <p className="text-2xl leading-relaxed">
          Trénujte chytře a správně
        </p>
      </article>

      <div className="relative w-[320px] h-[320px]">
        <Image
          src={img1}
          alt="Trenér při tréninku"
          className="object-cover rounded-t-xl"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div>
        <p className="max-w-prose p-4">
          Naučte se cvičit tak, abyste si neublížili, a posouvejte se za hezčím
          tělem i lepším zdravím rychleji a efektivněji. Osobní trenér totiž
          není výsadou milionářů nebo profesionálních sportovců. Alespoň pár
          tréninků s trenérem by měl absolvovat každý. Osobní trénink si
          můžete zarezervovat telefonicky, kontaktním formulářem nebo osobně na
          recepci NRG fitness.
        </p>

        <div>
          <p className="border-b-4 w-[50%] border-three mb-3"></p>
          <ul>
            <li className="flex flex-row gap-4 items-end pb-3">
              <p className="text-xl font-medium">60 minut</p>
              <p className="price text-2xl text-three font-semibold">600 Kč</p>
            </li>
            <li className="flex flex-row gap-4 items-end pb-3">
              <p className="text-xl font-medium">11 tréninků</p>
              <p className="price text-2xl text-three font-semibold">5499 Kč</p>
            </li>
            <li className="flex flex-row gap-4 items-end pb-3">
              <p className="text-xl font-medium">Trénink ve dvou</p>
              <p className="price text-2xl text-three font-semibold">
                450 Kč / osoba
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
