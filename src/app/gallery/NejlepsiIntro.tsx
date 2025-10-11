export function NejlepsiIntro() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section
      className="relative
          bg-[url('/backGround/in3.jpg')] 
          bg-center bg-no-repeat bg-cover 
          flex justify-start flex-wrap gap-10 p-5 py-32"
    >
      {/* Překrytí gradientem */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>

      <article className="max-w-prose p-4 pl-10 z-10 bg-one bg-opacity-[70%]">
        <h2 className="mb-4 text-8xl font-bold text-three">
          Nejsilnější fitko v Příboře!
        </h2>
        <p className="text-base text-xl leading-relaxed text-five">
          Kardio, crossfit, silová zóna – všechno, co potřebuješ. Špičkové
          stroje, jednoručky do všech vah, kettlebelly, expandéry i foamrollery.
          Řetězy, lana, hrazdy – připrav se na pořádný workout. A to je jen
          začátek!
        </p>
      </article>
    </section>
  );
}
