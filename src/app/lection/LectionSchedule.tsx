import Image from "next/image";
import img1 from "../../assets/img/img.jpg";

export default function LectionSchedule() {
  return (
    <section className="max-w-7xl mx-auto p-6 flex flex-col gap-6 justify-center">
      <div className="p-4 bg-white">
        <h2 className="text-gray-800 font-medium text-lg">ROZVRH LEKCÍ</h2>
        <p>Platný od 26.1.2024</p>
      </div>
      <div
        key="1"
        className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="relative h-64 w-64">
          <Image src={img1} alt="lorem" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
