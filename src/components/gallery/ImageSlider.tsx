"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from '../../assets/img/img.jpg'
import img2 from '../../assets/img/img.jpg'
import img3 from '../../assets/img/img.jpg'

 const images = [
    { path: img1, alt: "img1" },
    { path: img2, alt: "img2" },
    { path: img3, alt: "img3" },
  ];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img.path}
            alt={img.alt}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
