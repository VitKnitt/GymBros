"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import img1 from "../../assets/img/img.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img.jpg";
import img4 from "../../assets/img/img2.jpg";
import img5 from "../../assets/img/img.jpg";
import img6 from "../../assets/img/img2.jpg";
import img7 from "../../assets/img/img.jpg";
import img8 from "../../assets/img/img2.jpg";
import img9 from "../../assets/img/img.jpg";
import img10 from "../../assets/img/img2.jpg";
import img11 from "../../assets/img/img.jpg";
import img12 from "../../assets/img/img2.jpg";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

export default function NejlepsiGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const closeLightbox = () => setSelectedIndex(null);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Grid 2x6 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="relative h-[100px] w-[100px] w-full relative">
              <Image src={img} alt={`img-${index}`} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <X size={24} />
          </button>

          {/* Left arrow */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <ChevronRight size={36} />
          </button>

          {/* Image */}
          <div className="relative w-11/12 max-w-4xl h-[80vh]">
            <Image
              src={images[selectedIndex]}
              alt={`img-${selectedIndex}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
