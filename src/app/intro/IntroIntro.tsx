export function IntroIntro() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section
      className="relative
          bg-[url('/backGround/bgIntro.jpg')] 
          bg-center bg-no-repeat bg-cover 
          flex justify-start flex-wrap gap-10 p-5 py-32"
    >
      {/* Překrytí gradientem */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>
      <article className="max-w-prose p-4 pl-10 z-10 bg-one bg-opacity-[70%]">
        <h1 className="mb-4 text-7xl sm:text-8xl pb-3 font-bold text-three">
          Překonej svoje limity
        </h1>
        <h2 className="mb-4 text-2xl font-bold pb-3 border-b-4">
          Gym-Bros Fitness — místo, kde roste síla, disciplína a sebevědomí.
          Přidej se k nám a trénuj v top posilovně pro opravdové borce.
        </h2>
        <p className="text-base leading-relaxed text-three">
          Moderní vybavení • Skupinové tréninky • Přátelská komunita • Sauna a
          regenerace v ceně
        </p>
      </article>
    </section>
  );
}
