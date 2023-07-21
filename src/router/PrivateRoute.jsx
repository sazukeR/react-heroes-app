import React, { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";
// ESTE ES UN HIGHT ORDER COMPONENT
export const PrivateRoute = ({ children }) => {
  // SOLO NECESITO SABER SI EL USUARIO ESTA AUTENTICADO O NO
  // EN LA CONDICION DE ABAJO, SI EL USUARIO ESTA AUTENTICADO EL COMPONENTE MUESTRA SUS PROPIEDADES, SINO TE REGRESA A LA PANTALLA DE LOGIN

  const { logged } = useContext(AuthContext);

  // PARA MEJORAR LA EXPERIENCIA, UTILIZAMOS EL LOCALSTORAGE, EN CASO DE QUE EL USUARIO ESTE EN UNA RUTA
  // Y CIERRE SESION, AL VOLVER INICIAR SESION ESTARA EN LA ULTIMA PANTALLA QUE VISITO
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;

  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
