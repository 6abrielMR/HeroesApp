import React, { useMemo } from "react";

import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

import "animate.css";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
