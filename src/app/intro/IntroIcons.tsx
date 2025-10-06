import Image from "next/image";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";

const elements = [
  { path: facebook, alt: "facebook-icon", text: "Instagram" },
  { path: instagram, alt: "instagram-icon", text: "Instagram" },
  { path: youtube, alt: "youtube-icon", text: "Youtube" },
];

export default function IntroIcons() {
  return (
    <section className="max-w-7xl mx-auto p-6 flex gap-6 justify-center">
      {elements.map((item, index) => (
        <div
          key={index}
          className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative h-20 w-20">
            <Image
              src={item.path}
              alt={item.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
