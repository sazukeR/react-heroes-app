import { types } from "../types/types";

// NUESTRO REDUCER CENTRALIZA LAS ACCIONES QUE CAMBIAN LOS ESTADOS
// RECIBE UN ESTADO INICIAL
// EL REDUCER RECIBE UNA ACCION QUE ESTA ENLISTADA EN LA CARPETA /types/types.js
// CON LA SENTENCIA SWITCH PODEMOS DEFINIR LO QUE VA A SUCEDER AL UTILIZAR CADA TIPO DE ACCION
// CON EL initialState TENEMOS DE FORMA VISUAL LA REPRESENTACION DEL ESTADO INICIAL
/* const initialState = {
  logged: false,
}; */
// NOTA: EN UN REDUCER NO SE DEBEN LLAMAR FUNCIONES EXTERNAS, NO SE DEBE LLAMAR EL LOCALSTORAGE AQUI
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state, // SIEMPRE ES UTIL HACER EL ...state  PARA LLAMAR EL ESTADO INICIAL PRIMERO
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
