export function LectionIntro() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section
      className="relative
      bg-[url('/backGround/in2.jpg')] 
      bg-center bg-no-repeat bg-cover 
      flex justify-start flex-wrap gap-10 p-5 py-32"
    >
      {/* Překrytí gradientem */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>

      <article className="max-w-prose p-4 pl-10 z-10 bg-one bg-opacity-[70%]">
        <h2 className="mb-4 sm:text-8xl text-5xl font-bold text-three">Skupinové lekce</h2>
        <p className="text-base text-xl leading-relaxed text-five">
          Ve dvou se to lépe táhne, ale ve skupině to má pořádný náboj! Přidej
          se na jógu, HIIT nebo funkční trénink a nech se strhnout energií
          ostatních.
        </p>
        <p className="text-base leading-relaxed text-three">
          Všechny skupinové lekce máš v ceně vstupu nebo permanentky. Žádné
          příplatky — jen čistá motivace.
        </p>
      </article>
    </section>
  );
}
