import Image from "next/image";
import img1 from '../../assets/img/img.jpg'

export default function ImageWithSquares() {
  return (
    <div className="relative w-80 h-80 group mx-auto">
      {/* Čtverec vlevo nahoře */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-one rounded-md transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 z-0" />

      {/* Čtverec vpravo dole */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-two rounded-md transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 z-0" />

      {/* Hlavní obrázek */}
      <div className="relative w-full h-full z-10">
        <Image
          src={img1}
          alt="Tailwind"
          fill
          className="object-cover rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}
