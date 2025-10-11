import { Check } from "lucide-react"; // knihovna lucide-react už bývá v Next projektu
import Image from "next/image";
import cardsBg from "../../assets/img/itroCards.svg";

type Plan = {
  title: string;
  price: string;
  features: string[];
  image: any;
  highlighted?: boolean;
};


export function IntroPrice() {

   const plans: Plan[] = [
    {
      title: "1 vstup",
      price: "150 Kč",
      features: ["Vstup do fitness zóny", "Sprchy a šatny", "Bez závazku"],
      image: cardsBg,
    },
    {
      title: "1 měsíc",
      price: "1 200 Kč",
      features: [
        "Neomezený vstup",
        "Skupinové lekce",
        "Přístup 7 dní v týdnu",
      ],
      image: cardsBg,
    },
    {
      title: "3 měsíce",
      price: "3 000 Kč",
      features: [
        "Neomezený vstup",
        "Osobní plán tréninku",
        "Skupinové lekce zdarma",
        "VIP zóna + doplňky stravy",
      ],
      image: cardsBg, // jiné pozadí
      highlighted: true,
    },
  ];

  return (
    <section
      aria-label="Features"
      className="flex flex-col justify-center items-center gap-6 p-16 pt-40"
    >
      <article className="max-w-prose p-4">
        <h2 className="text-7xl font-bold text-three mb-3">NAŠE CENY</h2>
        <p className="text-base text-xl leading-relaxed">
          Jak často na sobě chcete makat? To necháme na Vás. Čím pravidelněji,
          tím víc toho od nás dostanete. A levněji.
        </p>
      </article>
    <section className="flex flex-wrap justify-center gap-8 py-16">
       {plans.map((plan, index) => (
         <div
           key={index}
           className={`relative w-[280px] md:w-[320px] p-6 rounded-2xl overflow-hidden shadow-2xl text-white cursor-pointer transition-transform duration-500 hover:scale-105 ${
             plan.highlighted
               ? "border-4 border-two"
               : "border border-three"
           }`}
         >
           {/* Pozadí */}
           <div className="absolute inset-0 -z-10">
             <Image
               src={plan.image}
               alt={plan.title}
               fill
               className="object-cover"
             />
             <div
               className={`absolute inset-0 ${
                 plan.highlighted
                   ? "bg-gradient-to-b from-yellow-600/60 via-black/80 to-black/90"
                   : "bg-gradient-to-b from-black/70 via-black/80 to-black/90"
               }`}
             />
           </div>
 
           {/* Obsah */}
           <h2 className="text-3xl font-bold mb-4 text-center">{plan.title}</h2>
           <p className="text-4xl font-semibold mb-6 text-center">{plan.price}</p>
 
           <ul className="space-y-3 mb-8">
             {plan.features.map((feature, i) => (
               <li key={i} className="flex items-center gap-2">
                 <Check className="text-green-400 w-5 h-5" />
                 <span>{feature}</span>
               </li>
             ))}
           </ul>
 
           <button
             className={`w-full py-2 rounded-lg font-semibold transition-colors ${
               plan.highlighted
                 ? "bg-yellow-400 text-black hover:bg-yellow-300"
                 : "bg-three text-two hover:bg-two hover:text-three"
             }`}
           >
             Koupit online
           </button>
         </div>
       ))}
     </section>
 
      <p className="text-base leading-relaxed">
        Registrovat se můžete online zde nebo osobně v NRG Fitness. V případě
        zájmu o roční nebo firemní členství s benefity, nás neváhejte
        kontaktovat.
      </p>
    </section>
  );
}
