import Image from "next/image";
import img1 from "../../assets/img/s1.jpg";

export function SluzbySauna() {
  return (
    <section className="flex flex-row justify-start flex-wrap gap-10 p-5 pb-20 pl-0 sm:pl-[10%]">
      <article className="max-w-prose p-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-three">SAUNA & ODPOČINKOVÁ ZÓNA</h2>
        <p className="text-2xl leading-relaxed">
          Další skvělý lidský vynález i u nás: saunu & odpočinek
        </p>
      </article>
      <div className="relative w-[320px] h-[320px]">
        <Image
          src={img1}
          alt=""
          className="object-cover rounded-t-xl"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          unoptimized
        />
      </div>
      <div>
        <p className="max-w-prose p-4">
          Kromě sauny v každé z šaten můžete na chvíli vypnout myšlenky ve
          velké, společné finské sauně. V odpočinkové zóně jsme se pro vás
          snažili vytvořit tu nejvíce relaxační atmosféru, podařilo se nám to?
          Vše v ceně vstupu.
        </p>
        <div>   
          <p className="border-b-4 w-[50%]"></p>
          <ul className="">
            <li key="1" className="flex flex-row gap-4 items-end pb-3">
              <div>
                <p className="">Neomezeně</p>
              </div>
              <p className="price">V ceně vstupu</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
