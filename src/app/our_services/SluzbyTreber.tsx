import Image from "next/image";
import img1 from "../../assets/img/trainWithTrener.jpg";

export function SluzbyTreber() {
  return (
    <section className="flex flex-row justify-start flex-wrap gap-10 p-5 pb-20 pl-0 sm:pl-[10%]">
      <article className="max-w-prose p-4">
        <h2 className="text-5xl font-bold mb-3 text-three">
          OSOBNÍ TRÉNINK S TRENÉREM
        </h2>
        <p className="text-2xl leading-relaxed">Trénuj chytře, trénuj tvrdě</p>
      </article>

      <div className="relative w-[320px] h-[320px]">
        <Image
          src={img1}
          alt="Trenér při tréninku"
          className="object-cover rounded-t-xl"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          unoptimized
        />
      </div>

      <div>
        <p className="max-w-prose p-4">
          Nauč se cvičit správně, vyhni se zraněním a posouvej svoje tělo
          rychleji k lepší kondici a zdraví. Osobní trenér není jen pro profíky
          – každý by měl alespoň pár lekcí zkusit. Rezervuj si trénink
          telefonicky, přes formulář nebo přímo na recepci Gym-Bros Fitness.
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
              <p className="price text-2xl text-three font-semibold">
                5 499 Kč
              </p>
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
