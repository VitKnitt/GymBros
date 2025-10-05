import { IntroFAQ } from "./intro/FAQ/IntroFAQ";
import { IntroCard } from "./intro/IntroCard";
import IntroIcons from "./intro/IntroIcons";
import { IntroIntro } from "./intro/IntroIntro";
import { IntroNews } from "./intro/IntroNews";
import { IntroPrice } from "./intro/IntroPrice";


export default function Home() {
   return (
    <section className="bg-one flex flex-col justify-evenly py-20">
     <IntroIntro />
     <IntroCard />
     <IntroNews />
     <IntroPrice />
     <IntroFAQ />
     <IntroIcons />
     </section>
   );
}
