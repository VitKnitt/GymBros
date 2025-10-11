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
        <h2 className="mb-4 text-8xl font-bold text-three">Skupinové lekce</h2>
        <p className="text-base text-xl leading-relaxed text-five">
          Ve dvou se to lépe táhne, ve skupině nejlépe. Ať už na józe, nebo na
          HIITku. Nech se motivovat!
        </p>
        <p className="text-base leading-relaxed text-three">
          Všechny skupinové lekce jsou v ceně vstupu / permanentky
        </p>
      </article>
    </section>
  );
}
