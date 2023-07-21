import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

/* CUANDO YA HEMOS CONFIGURADO LOS REDUCERS Y ESTABLECIDO LOS CONTEXTOS PARA LA INFORMACION DE USUARIO
LO SIGUIENTE SERA DEFINIR CUANLES SERAN NUESTRAS RUTAS PUBLICAS Y PRIVADAS,
ES DECIR, HAY CIERTAS PANTALLAS QUE NO DEBERIAN MOSTRARSE SI NO HAY UN USUARIO LOGUEADO */

// TENEMOS QUE TRABAJAR NUESTRAS RUTAS COMO SI FUERAN HIGHT ORDER COMPONENTS, ES DECIR, TENEMOS UNA RUTA QUE RECIBE RUTAS HIJAS

export const AppRouter = () => {
  return (
    <>
      {/*     ESTA SON LAS RUTAS ANTES DE ESTABLECER RUTAS PRIVADAS Y PUBLICAS */}
      {/*       <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes> */}
      {/* ////////////////////////// */}
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
