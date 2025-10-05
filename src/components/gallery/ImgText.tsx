import Image from "next/image";
import img1 from "../../assets/img/img.jpg";
import img2 from "../../assets/img/img.jpg";
import img3 from "../../assets/img/img.jpg";

const elements = [
  { path: img1, alt: "img1", text: "Lorem ipsum dolor sit amet" },
  { path: img2, alt: "img2", text: "Consectetur adipiscing elit" },
  { path: img3, alt: "img3", text: "Sed do eiusmod tempor" },
];

export default function ImgText() {
  return (
    <section className="max-w-7xl mx-auto p-6 flex gap-6 justify-center">
      {elements.map((item, index) => (
        <div
          key={index}
          className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative h-64 w-full">
            <Image
              src={item.path}
              alt={item.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white">
            <p className="text-gray-800 font-medium text-lg">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
