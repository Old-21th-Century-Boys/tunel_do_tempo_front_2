import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css';
import { postLogin } from '../services/usuariosService';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate(); // useNavigate para redirecionamento

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setShowModal(false);

        try {
            const response = await postLogin(email, senha);
            
            if (response.success) {
                setModalMessage('Login realizado com sucesso!');
                setShowModal(true);

                // Após 1 segundo, redireciona para a Home
                setTimeout(() => {
                    setShowModal(false);
                    navigate('/home'); // Redirecionar para a Home Page
                }, 1000);
            } else {
                setModalMessage('Email ou senha incorretos.');
                setShowModal(true);
            }
        } catch (error) {
            setModalMessage('Ocorreu um erro ao tentar fazer o login.');
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
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

            {/* Modal de resultado */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>{modalMessage}</p>
                        <button onClick={() => setShowModal(false)}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPage;
