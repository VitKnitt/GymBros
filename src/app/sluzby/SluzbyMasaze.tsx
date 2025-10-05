import Image from "next/image";
import img1 from "../../assets/img/img.jpg";

export function SluzbyMasaze() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="bg-one bg-cover bg-center flex flex-row justify-evenly flex-wrap gap-10 p-5 pb-20">
      <article className="max-w-prose p-4">
        <h2 className="text-2xl font-bold mb-3">SPORTOVNÍ MASÁŽE</h2>
        <p className="text-base leading-relaxed">
          Regenerace není sprosté slovo
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
      <div>
        <p className="max-w-prose p-4">
          V našem fitness centru v Brně nabízíme víc než jen trénink. Dopřejte
          si odpočinek a regeneraci díky našim sportovním masážím, které jsou
          ideální po náročném výkonu i jako součást pravidelné péče o tělo.
          Masáž pomáhá uvolnit namožené svaly, podpořit regeneraci a zlepšit
          celkový výkon.
        </p>
        <div>
          <p className="border-b-4 w-[50%]"></p>
          <ul className="">
            <li key="1" className="flex flex-row gap-4 items-end pb-3">
              <div>
                <p className="">90 minut</p>
              </div>
              <p className="price">1 200 Kč</p>
            </li>
            <li key="2" className="flex flex-row gap-4 items-end pb-3">
              <div>
                <p className="">60 minut</p>
              </div>
              <p className="price">900 Kč</p>
            </li>
            <li key="3" className="flex flex-row gap-4 items-end pb-3">
              <div>
                <p className="">30 minut</p>
              </div>
              <p className="price">500 Kč</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
