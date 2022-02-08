import React from "react";

import { HeroList } from "../hero/HeroList";

export const DcScreen = () => {
  return (
    <div>
      <h1 className="my-3">DcScreen</h1>
      <HeroList publisher="DC Comics" />
    </div>
  );
};
