import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  // EN ESTE PUNTO AGREGAMOS LAS PRIMERAS CONFIGURACIONES PARA EL LOGUEO, YA DESPUES DE HABER CONFIGURADO NUESTRO AUTHPROVIDER
  const { login } = useContext(AuthContext); // DESESTRUCTURO LOGIN DEL CONTEXT
  const navigate = useNavigate();

  const onLogin = () => {
    // EN EL PRIVATEROUTE TENEMOS UNA FUNCIONALIDAD LS VINCULADA A ESTA QUE NOS PERMITE RECORDAR CUAL FUE NUESTRA ULTIMA RUTA
    // ESTA ULTIMA RUTA QUE FUE VISITADA CUANDO ESTABAMOS LOGUEADOS SERA LA QUE VEREMOS AL VOLVER A INICIAR SESION
    const lastPath = localStorage.getItem("lastPath") || "/";

    // LA FUNCION LOGIN LA TRAEMOS DE NUESTRO CONTEXT
    // COMO ES UNA FUNCION SINCRONA NO VAMOS A PONER EL AWAIT PERO EVENTUALMENTE DEBERA SER SINCRONA CUANDO ESOS DATOS SEAN PEDIDOS, EN ESTE CASO PASAMOS LOS DATOS DE FORMA MANUAL
    login("Reinaldo Contreras");
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
