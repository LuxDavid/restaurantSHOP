import { Link } from "react-router-dom";

const Lateral= ()=>{

return(

<aside id="lateral">

<h3>Iniciar sesion</h3>

<div id="login" className="aside-box">
  <form id="form-login">
  <input type="email" placeholder="Escribe tu correo electronico" id="correo-user"/>
  <input type="password" placeholder="Ingresa tu contraseña" id="correo-pasword"/>
  <input type="submit"  value="Entrar" id="sesionInit"/>
  <input type="reset" value="Limpiar"/>
  <Link to="#">Registrate aqui</Link>
  <Link to="#" id="recuperar-password">¿Has olviado tu contraseña?</Link>
  </form>	
  </div>

</aside>

);



}

export default Lateral