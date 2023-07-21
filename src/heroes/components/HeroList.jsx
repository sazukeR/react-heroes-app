import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => {
        // con el spread operator puedo enviar todas las propiedades sin necesidad de definirlas una por una
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
