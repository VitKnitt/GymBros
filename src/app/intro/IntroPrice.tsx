import React from "react";

type CardItem = {
  title: string;
  description: string;
  badge: string;
};

export function IntroPrice() {
  const cards: CardItem[] = [
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      badge: "Performance",
    },
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      badge: "Performance",
    },
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      badge: "Performance",
    },
  ];

  return (
    <section
      aria-label="Features"
      className="flex flex-col justify-center items-center gap-6 p-16"
    >
      <article className="max-w-prose p-4">
        <h2 className="text-2xl font-bold mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam
          numquam, quasi nesciunt quia maxime, possimus aliquid voluptatum
          cupiditate iure voluptate explicabo alias dolorem nisi molestiae minus
          obcaecati? Aperiam, assumenda!
        </p>
      </article>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-one p-16">
        {cards.map((feature, index) => (
          <article
            key={index}
            className="border-2 rounded-xl border-two p-5 bg-one"
          >
            <div className="flex items-center justify-between pb-8">
              <h2 className="text-2xl">{feature.title}</h2>
              <p className="bg-three p-2 rounded-2xl text-xs">
                {feature.badge}
              </p>
            </div>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
      <p>
        Registrovat se můžete online zde nebo osobně v NRG Fitness. V případě
        zájmu o roční nebo firemní členství s benefity, nás neváhejte
        kontaktovat.
      </p>
    </section>
  );
}
