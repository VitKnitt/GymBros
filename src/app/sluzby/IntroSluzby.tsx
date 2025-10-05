
export function IntroSluzby() {
 //bg-fixed
 //bg-[url('/backGround/cccoil.svg')]
  return <section
      className="relative
          bg-[url('/backGround/bgIntro.jpg')] 
          bg-center bg-no-repeat bg-cover 
          flex justify-evenly flex-wrap gap-10 p-5 py-32"
    >
      {/* Překrytí gradientem */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>

     
      <div className="relative z-10 flex flex-wrap justify-evenly gap-10 w-full">
        <article className="max-w-prose p-4">
          <h1 className="mb-4 text-2xl font-bold">
            Chtějte pro sebe to nejlepší
          </h1>
          <h2 className="mb-4 text-2xl font-bold">
            NRG Fitness je velké, krásné a pro všechny. Začněte ještě dnes
            trénovat v nejlepší posilovně v Brně.
          </h2>
          <p className="text-base leading-relaxed">
            Čisté a moderní • Sálové lekce v ceně • Sauna v ceně
          </p>
        </article>
      </div>
      
    </section>
}
