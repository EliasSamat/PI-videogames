import React, { useState } from 'react';
import {useHistory, Link } from 'react-router-dom';
import '../style/homePage.css' ; // Importa el archivo de estilo

const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const history = useHistory();

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para iniciar sesión...
    // Después de iniciar sesión exitosamente, redirige a otra página/componente
    history.push(`/pagPrincipal?nombre=${usuario}`);
  };

  return (
    <div className='formulario'>
      <div className='recuadro'>
        <div className='titulo'>
          <h2>INGRESA</h2>
          <form onSubmit={handleSubmit}>
            <div className='usuario'>
              <label>USUARIO:</label>
              <input type='text' value={usuario} onChange={handleUsuarioChange} />
            </div>
            <Link to="/pagPrincipal"> {/* Redirige a la ruta '/pagPrincipal' */}
              <button type='submit'>Iniciar Sesión</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

