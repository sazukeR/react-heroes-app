import React, { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  // SOLO NECESITO SABER SI EL USUARIO ESTA AUTENTICADO O NO
  // EN LA CONDICION DE ABAJO, SI EL USUARIO ESTA AUTENTICADO EL COMPONENTE MUESTRA SUS PROPIEDADES, SINO TE REGRESA A LA PANTALLA DE LOGIN
  return !logged ? children : <Navigate to="/marvel" />;
};
