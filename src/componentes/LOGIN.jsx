import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LOGIN.scss'




const Login = () => {
    const [username, setUsername] = useState('PEPE');
    const [password, setPassword] = useState('12345');
    const [loggedIn, setLoggedIn] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate(); // Hook para manejar las redirecciones

    const handleLogin = () => {
        // Verificar las credenciales aquí
        if (username === 'PEPE' && password === '12345') {
            
            setLoggedIn(true);
            alert(`¡Bienvenido, ${username}!`);
            navigate('/products'); // Redirigir después de iniciar sesión
        } else {
            setShowAlert(false);
            alert('DATOS INCORRECTOS');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form">
            <h2>Iniciar Sesión</h2>
            {showAlert && <div className="alert">DATOS INCORRECTOS</div>}
            <input className="login-input"
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input className="login-input"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="login-button">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
