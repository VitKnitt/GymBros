export function IntroKontakt() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section
      className="relative
          bg-[url('/backGround/in1.jpg')] 
          bg-top bg-no-repeat bg-cover 
          flex justify-start flex-wrap gap-10 p-5 py-32"
    >
      {/* Překrytí gradientem */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>

      <article className="max-w-prose p-4 pl-10 z-10 bg-one bg-opacity-[70%]">
        <h2 className="mb-4 text-8xl font-bold text-three">Kde nás najdeš</h2>
        <p className="text-base text-xl leading-relaxed text-five">
          Gym-Bros Fitness najdeš přímo v srdci Příbořa. Přijď si zacvičit, dát do
          toho všechno a nasát pořádnou dávku energie. Činky čekají – chybíš už
          jen ty!
        </p>
      </article>
    </section>
  );
}
