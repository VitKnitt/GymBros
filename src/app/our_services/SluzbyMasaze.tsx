import Image from "next/image";
import img1 from "../../assets/img/m5.jpg";

export function SluzbyMasaze() {
  return (
    <section className="flex flex-row justify-start flex-wrap gap-10 p-5 pb-20 pl-0 sm:pl-[10%]">
      <article className="max-w-prose p-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-three">SPORTOVNÍ MASÁŽE</h2>
        <p className="text-2xl leading-relaxed">
          Regenerace není slabost – je to tvůj tajný booster výkonu
        </p>
      </article>

      <div className="relative w-[320px] h-[320px]">
        <Image
          src={img1}
          alt="Sportovní masáže"
          className="object-cover rounded-t-xl"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          unoptimized
        />
      </div>

      <div>
        <p className="max-w-prose p-4">
          V Gym-Bros Fitness to nekončí u činek. Po tvrdém tréninku dej svému tělu
          restart s našimi sportovními masážemi. Uvolníš svaly, zrychlíš
          regeneraci a připravíš se na další výkon. Ideální po drsných
          trénincích nebo jako pravidelná péče o tělo, která tě drží na vrcholu
          formy.
        </p>

        <div>
          <p className="border-b-4 w-[50%] border-three mb-3"></p>
          <ul>
            <li className="flex flex-row gap-4 items-end pb-3">
              <p className="text-xl font-medium">90 minut</p>
              <p className="price text-2xl text-three font-semibold">
                1 200 Kč
              </p>
            </li>
            <li className="flex flex-row gap-4 items-end pb-3">
              <p className="text-xl font-medium">60 minut</p>
              <p className="price text-2xl text-three font-semibold">900 Kč</p>
            </li>
            <li className="flex flex-row gap-4 items-end pb-3">
              <p className="text-xl font-medium">30 minut</p>
              <p className="price text-2xl text-three font-semibold">500 Kč</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
