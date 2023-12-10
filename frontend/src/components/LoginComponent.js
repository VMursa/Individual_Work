import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import AuthService from '../services/AuthService';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await AuthService.login(username, password);
            login(userData);
            navigate('/students');
        } catch (err) {
            setError('Login failed. Check your credentials.');
        }
    };

    const formStyle = {
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '300px',
        backgroundColor: '#f9f9f9',
    };

    const inputStyle = {
        margin: '10px 0',
        width: '100%',
        padding: '8px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default LoginComponent;
