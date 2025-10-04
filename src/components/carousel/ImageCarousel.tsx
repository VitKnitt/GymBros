"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // hezké ikony
import img1 from '../../assets/img/img.jpg'
import img2 from '../../assets/img/img.jpg'
import img3 from '../../assets/img/img.jpg'

export default function ImageCarousel() {

  const images = [
    { path: img1, alt: "img1" },
    { path: img2, alt: "img2" },
    { path: img3, alt: "img3" },
  
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Obrázek */}
      <Image
        src={images[index].path}
        alt={images[index].alt}
        className="w-full rounded-2xl shadow-lg object-cover"
      />

      {/* Levá šipka */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Pravá šipka */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Tečky dole */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}