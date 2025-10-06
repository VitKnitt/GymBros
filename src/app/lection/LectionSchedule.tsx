// src/components/GymSchedule.tsx
import React from "react";

type Lesson = {
  time: string;
  days: {
    [key: string]: string | null; // např. { Monday: "Pilates", Tuesday: null, ... }
  };
};

export default function LectionSchedule() {
  const schedule: Lesson[] = [
    {
      time: "07:00 – 08:00",
      days: {
        Monday: "Ranní jóga",
        Tuesday: "Kruhový trénink",
        Wednesday: "Pilates",
        Thursday: "Funkční trénink",
        Friday: "Core & Stretch",
      },
    },
    {
      time: "09:00 – 10:00",
      days: {
        Monday: "Pumpa s Dušanem",
        Tuesday: "Pilates",
        Wednesday: "Kruhový trénink",
        Thursday: "Mobilita a stabilita",
        Friday: "Ranní jóga",
      },
    },
    {
      time: "12:00 – 13:00",
      days: {
        Monday: "Volno",
        Tuesday: "Volno",
        Wednesday: "Pilates",
        Thursday: "Volno",
        Friday: "Volno",
      },
    },
    {
      time: "16:00 – 17:00",
      days: {
        Monday: "Kruhový trénink",
        Tuesday: "Jóga",
        Wednesday: "Pumpa s Dušanem",
        Thursday: "Funkční trénink",
        Friday: "Pilates",
      },
    },
    {
      time: "18:00 – 19:00",
      days: {
        Monday: "Pilates",
        Tuesday: "Core & Stretch",
        Wednesday: "Jóga",
        Thursday: "Pumpa s Dušanem",
        Friday: "Kruhový trénink",
      },
    },
  ];

  const days = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek"];

  return (
    <section className="p-6 md:p-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-three">
        Rozvrh lekcí
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full text-center border-collapse bg-white shadow-md">
          <thead className="bg-three text-one">
            <tr>
              <th className="py-3 px-4 border border-two">Čas</th>
              {days.map((day) => (
                <th key={day} className="py-3 px-4 border border-two">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((lesson, i) => (
              <tr key={i} className="odd:bg-four even:bg-five hover:bg-three/20 transition">
                <td className="py-3 px-4 border border-two font-medium text-two">
                  {lesson.time}
                </td>
                {Object.values(lesson.days).map((activity, j) => (
                  <td key={j} className="py-3 px-4 border border-two text-sm text-two">
                    {activity || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center mt-6 text-three text-sm italic">
        *Rozvrh se může měnit podle obsazenosti a dostupnosti trenérů.
      </p>
    </section>
  );
}
