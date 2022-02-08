import React from "react";
import { HeroList } from "../hero/HeroList";

export const MarvelScreen = () => {
  return (
    <div>
      <h1 className="my-3">MarvelScreen</h1>
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
