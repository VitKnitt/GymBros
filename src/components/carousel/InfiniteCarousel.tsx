import Image from "next/image";
import img1 from '../../assets/img/img.jpg'
import img2 from '../../assets/img/img.jpg'
import img3 from '../../assets/img/img.jpg'


export default function InfiniteCarousel() {

const images = [
  { path: img1, alt: "img1" },
  { path: img2, alt: "img2" },
  { path: img3, alt: "img3" },
];

  return (
    <div className="flex items-center justify-center bg-[#E3E3E3] py-10">
      <div className="slider relative mx-auto h-[150px] w-[960px] overflow-hidden rounded-lg shadow-lg bg-white">
        <div className="slide-track flex animate-scroll">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="slide relative h-[100px] w-[250px] flex-shrink-0">
              <Image
                src={img.path}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 960px) 250px, 250px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
