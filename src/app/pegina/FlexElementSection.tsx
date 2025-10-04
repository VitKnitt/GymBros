import DropDown from "@/src/components/cads/DropDown";
import { ImageCard } from "./ImageCard";
import FadeIn from "@/src/components/FadeIn";

export function FlexElementSection() {
 //bg-fixed
 //bg-[url('/backGround/cccoil.svg')]
  return <section className="bg-one bg-cover bg-center flex justify-evenly flex-wrap gap-10 p-5 pb-20">
        <ImageCard />
        <DropDown question={"A"} answer={"B"} />
        <FadeIn children={<ImageCard />} />
      </section>;
}
