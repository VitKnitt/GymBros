import Image from "next/image";
import img1 from "../../assets/img/diagnostic.jpg";

export function SluzbyPoradentstvi() {
  return (
    <section className="bg-one bg-cover bg-center flex flex-row justify-start flex-wrap gap-10 p-5 pb-20 pl-0 sm:pl-[10%]">
      <article className="max-w-prose p-4">
        <h2 className="text-5xl font-bold mb-3 text-three">
          DIAGNOSTIKA A PORADENSTVÍ
        </h2>
        <p className="text-2xl leading-relaxed">Když to chcete mít ťip ťop</p>
      </article>

      <div className="relative w-[320px] h-[320px]">
        <Image
          src={img1}
          alt="Diagnostika a poradenství"
          className="object-cover rounded-t-xl"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div>
        <p className="max-w-prose p-4">
          U cvičení musíte samozřejmě vidět své výsledky i na papíře — protože
          zdravé tělo není jen o zvedání činek, ale také o tom, jak se vaše tělo
          vyvíjí a regeneruje. Nabízíme diagnostiku složení těla, konzultace s
          odborníkem a doporučení pro optimální výživu a trénink.
        </p>

        <div>
          <p className="border-b-4 w-[50%] border-three mb-3"></p>
          <ul>
            <li className="flex flex-row gap-4 items-end pb-3">
              <p className="text-xl font-medium">30 minut</p>
              <p className="price text-2xl text-three font-semibold">350 Kč</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
