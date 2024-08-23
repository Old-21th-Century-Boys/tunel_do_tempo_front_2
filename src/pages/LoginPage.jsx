import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css';
import { postLogin } from '../services/usuariosService';
import { toast, Toaster } from 'react-hot-toast';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await postLogin(email, senha);
            
            if (response.success) {
                toast.success('Login realizado com sucesso!');

                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                toast.error('Email ou senha incorretos.');
            }
        } catch (error) {
            toast.error('Ocorreu um erro ao tentar fazer o login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="login-container">
                <div className="login-image"></div>
                <div className="login-form">
                    <h1>BEM VINDO AO LOGIN</h1>
                    <p>
                        Caso seja membro realize o Login, caso não seja entre como visitante.
                    </p>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <button type="submit" className="login-button" disabled={loading}>
                            {loading ? 'Carregando...' : 'Entrar'}
                        </button>
                    </form>
                    <p className="visitor">
                        Visitante? Bem vindo! <a href="/visitor">clique aqui</a>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;
