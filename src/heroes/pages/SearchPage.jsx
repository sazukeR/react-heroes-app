import React from "react";
import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"; // es un paquete que instalamos yarn add query-string para estraer el objeto del search y evitamos hacer procesamiento nosotros
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { q = "" } = queryString.parse(location.search); // de la query desesctructuramos la q y si no viene sera igual a un string vacio

  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0; // regresa un true o un false
  const showError = q.length > 0 && heroes.length === 0;

  console.log(location);

  const { searchText, onInputChange } = useForm({
    searchText: q, //el cuadro del input va a ser la query, de este modo si recargo el vageador el input se quedara con el ultimo valor y no se borrara.
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/*    tenemos la opcion de renderizar uno un otro div si q es igual a nada mostramos uno y si el resultado de la busqueda es igual a 0 entonces mostramos el rojo la desventaja de este metodo es la lejibilidad del codigo */}

          {/* {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )} */}

          {/* opacity o display none */}

          {/* TAMBIEN PODEMOS USAR ESTE METODO UTILIZANDO CONDICIONALES PARA CAMBIAR LAS CLASES MOSTRANDO UN CUADRO U OTRO, PARA ESTE METODO SE UTILIZAN VARIASBLES CREADAS PREVIAMENTE PARA VOLVER MAS ENTENDIBLE EL CODIGO EL CODIGO */}
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
          {/*  <HeroCard  {...hero}/> */}
        </div>
      </div>
    </>
  );
};
