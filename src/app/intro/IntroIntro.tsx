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
        <h1 className="mb-4 text-8xl pb-3 font-bold text-three">
          Chtějte pro sebe to nejlepší
        </h1>
        <h2 className="mb-4 text-2xl font-bold pb-3 border-b-4">
          NRG Fitness je velké, krásné a pro všechny. Začněte ještě dnes
          trénovat v nejlepší posilovně v Brně.
        </h2>
        <p className="text-base leading-relaxed text-three">
          Čisté a moderní • Sálové lekce v ceně • Sauna v ceně
        </p>
      </article>
    </section>
  );
}
