import React, { useMemo } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";
import { heroImages } from "../../helpers/heroImages";

export const HeroScreen = () => {
  const navigate = useNavigate();
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  const handleReturn = () => navigate(-1);

  if (!hero) return <Navigate to="/" />;

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroImages(`./${id}.jpg`)}
          alt={superhero}
          className="img-thumbnail animate__animated animate__zoomInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__lightSpeedInLeft">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
