// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6 bg-one">
      <h1 className="text-7xl font-extrabold text-three mb-4">404</h1>
      <h2 className="text-4xl font-bold text-five mb-6">
        Ups! Stránka nenalezena
      </h2>
      <p className="text-xl mb-6">
        Neboj, i nejsilnější biceps občas zabloudí. <br />
        Pojď zpátky do NRG Fitness a ukaž, co v tobě je!
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-three text-white rounded-lg hover:bg-three/80 transition"
      >
        Zpátky na hlavní stránku
      </Link>
    </div>
  );
}
