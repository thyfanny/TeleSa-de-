import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Telesaude_logo.png';
import './style.css';
import api from '../../services/api';
import { useState } from 'react';
function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', {
                email,
                senha
            });
            if (response.status === 200) {
                alert('Login realizado com sucesso!');
                navigate('/main'); // Redireciona para a página Main após o login
            }
        } catch (error) {
            alert('E-mail ou senha inválidos ou usuario ainda não validado. Por favor, tente novamente.');
            console.error(error);
        }
       
    };

    return (
        <div className="container">
            <div className="login-section">
                <img
                    src={Logo}
                />
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            required
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <div className="buttons-container">
                        <button type="submit" className="btn-entrar2">
                            Entrar
                        </button>
                        <Link to="/" className="btn-voltar">
                            Voltar
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
