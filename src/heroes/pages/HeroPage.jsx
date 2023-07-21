import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id, ...rest } = useParams(); // ...rest es para traerme todas las propiedades de params

  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate(-1);
  };
  // useMemo nos permite memorizar los valores que devuelve esta funcion, recordando que react redibuja la pantalla
  // cada vez que un estado cambia, nosotros NO queremos eso, queremos que los procesos pesados,
  // solo sean llamados cuando se necesite, por ejemplo en este caso solo queremos llamar la funcion cuando el id
  // tenga un cambio

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}{" "}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}{" "}
          </li>
          <li className="list-group-item">
            <b>First appearance::</b> {hero.first_appearance}{" "}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button onClick={navigateToBack} className="btn btn-outline-primary">
          Regresar
        </button>
      </div>
    </div>
  );
};

// NOTA: este componente esta animado con animate.css una pagina que nos ofrece un cdn que esta pegado en el html y con esta puedo usar distintas clases para animaciones
