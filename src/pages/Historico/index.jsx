import { useNavigate } from 'react-router-dom';
import './style.css';
import api from '../../services/api';

function Historico() {
    const navigate = useNavigate();

    // Dados mockados para exemplo
    const consultas = [
        {
            id: 1,
            paciente: "Maria Silva",
            cpf: "123.456.789-00",
            data: "2024-02-15",
            status: "realizada"
        },
        {
            id: 2,
            paciente: "João Santos",
            cpf: "987.654.321-00",
            data: "2024-02-14",
            status: "cancelada"
        },
        {
            id: 3,
            paciente: "Ana Oliveira",
            cpf: "456.789.123-00",
            data: "2024-02-13",
            status: "realizada"
        }
    ];

    const handleVoltar = () => {
        navigate('/main');
    };

    return (
        <div className="historico-container">
            <h1>Histórico de Consultas</h1>
            
            <div className="consultas-lista">
                {consultas.map(consulta => (
                    <div key={consulta.id} className="consulta-card">
                        <div className="consulta-info">
                            <h3>{consulta.paciente}</h3>
                            <p>CPF: {consulta.cpf}</p>
                            <p>Data: {new Date(consulta.data).toLocaleDateString('pt-BR')}</p>
                            <span className={`status-badge ${consulta.status}`}>
                                {consulta.status === 'realizada' ? 'Realizada' : 'Cancelada'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <button className="voltar-button" onClick={handleVoltar}>
                Voltar
            </button>
        </div>
    );
}

export default Historico;