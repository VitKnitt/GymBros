import { IntroFAQ } from "./intro/FAQ/IntroFAQ";
import { IntroCard } from "./intro/IntroCard";
import { IntroIntro } from "./intro/IntroIntro";
import { IntroNews } from "./intro/IntroNews";
import { IntroPrice } from "./intro/IntroPrice";

export default function Home() {
  return (
    <section className="bg-one bg-[url('/backGround/bg3.svg')] flex flex-col justify-evenly pt-20">
      <IntroIntro />
      <div className="bg-one bg-opacity-[80%]">
        <IntroCard />
        <IntroNews />
        <IntroPrice />
        <IntroFAQ />
      </div>
    </section>
  );
}
