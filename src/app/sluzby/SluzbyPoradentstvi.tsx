import Image from "next/image";
import img1 from "../../assets/img/img.jpg";

export function SluzbyPoradentstvi() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="bg-one bg-cover bg-center flex flex-row justify-evenly flex-wrap gap-10 p-5 pb-20">
      <article className="max-w-prose p-4">
        <h2 className="text-2xl font-bold mb-3">DIAGNOSTIKA A PORADENSTVÍ</h2>
        <p className="text-base leading-relaxed">Když to chcete mít ťip ťop</p>
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
          U cvičení musíte samozřejmě vidět svoje výsledky i na papíře, jelikož
          to není jen o zvedání činek, ale i o udržování svého těla na těch
          správných hodnotách!
        </p>
        <div>
          <p className="border-b-4 w-[50%]"></p>
          <ul className="">
            <li key="1" className="flex flex-row gap-4 items-end pb-3">
              <div>
                <p className="">30 minut</p>
              </div>
              <p className="price">350 Kč</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
