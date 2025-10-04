"use client";

import { useState } from "react";
import Image from "next/image";
import img1 from '../../assets/img/img.jpg'
import img2 from '../../assets/img/img.jpg'
import img3 from '../../assets/img/img.jpg'

const images = [
  { path: img1, alt: "img1" },
  { path: img2, alt: "img2" },
  { path: img3, alt: "img3" },
];

export default function Gallery() {
 const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* wrapper s pevnou výškou */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.path}
            alt={img.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* tečky */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-blue-500 scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
