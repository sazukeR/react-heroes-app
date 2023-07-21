import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// EL AUTH PROVIDER DEBE ENVOLVER TODA LA APLICACION, ESTE COMPONENTE LO DEFINIREMOS EN EL PUNTO MAS ALTO DE MI APLICACION EN <HeroesApp />

// al desestructurar {children} tenemos todas las props

// el auth provider toma un contexto que puede ser utilizado dentro del componente

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user, // usamos doble negacion para saber si el usuario existe
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init); // USE REDUCER EL HOOK TOMA EL REDUCER QUE VAMOS A UTILIZAR Y EL ESTADO INICIAL

  // EN ESTE PUNTO PODRIAMOS USAR UNA FUNCION ASYNCRONA, LO VEREMOS MAS ADELANTE....
  /*   const login = async(email, password) =>{

  } */

  const login = (name = "") => {
    const user = { id: "ABC", name };
    const action = {
      type: types.login,
      // EN EL PAYLOAD MANDO EL USUARIO QUE SE VA A LOGUEAR
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...state, login: login, logout: logout }}>
      {children}
    </AuthContext.Provider>
  );
};
