import Image from "next/image";
import img1 from "../../assets/img/solar.jpg";

export function SluzbySolarium() {
  return (
    <section className="flex flex-row justify-start flex-wrap gap-20 p-5 pb-20 pl-0 sm:pl-[10%]">
      <article className="p-4">
        <h2 className="text-5xl font-bold mb-3 text-three">SOLÁRIUM</h2>
        <p className="text-2xl leading-relaxed">Bronzová kůže nonstop</p>
      </article>

      <div className="relative w-[320px] h-[320px]">
        <Image
          src={img1}
          alt="Solárium"
          className="object-cover rounded-t-xl"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div>
        <p className="max-w-prose p-4">
          V Gym-Bros Fitness myslíme i na tvůj look. Moderní stojící solárium ti
          zajistí rovnoměrné opálení a příjemnou relaxaci. Užij si bronzovou
          kůži kdykoli chceš – cena je jen 13 Kč za minutu.
        </p>

        <div>
          <p className="border-b-4 w-[50%] border-three mb-3"></p>
          <ul>
            <li className="flex flex-row gap-4 items-end pb-3">
              <p className="text-xl font-medium">1 minuta</p>
              <p className="price text-2xl text-three font-semibold">13 Kč</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
