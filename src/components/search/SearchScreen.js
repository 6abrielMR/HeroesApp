import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchText}
            />
            <button
              className="btn btn-outline-primary mt-1 col-12"
              type="submit"
            >
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {!!!q ? (
            <div className="alert alert-info">Bucar un héroe</div>
          ) : (
            !heroesFiltered.length && (
              <div className="alert alert-danger">
                No hay resultados para: <b>{q}</b>
              </div>
            )
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
