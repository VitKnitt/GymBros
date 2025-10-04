import Image from "next/image";
import img from "../../assets/img/img.jpg";

export function GridElementSection() {
  const images = [img, img, img, img];

  return (
    <section className="bg-one bg-cover bg-center grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 p-5 justify-items-center">

      {images.map((src, index) => (
        <div key={index} className="w-[300px]">
          <Image
            src={src}
            alt={`boxer-${index}`}
            width={300}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      ))}
      
    </section>
  );
}
