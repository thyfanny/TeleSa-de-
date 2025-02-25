import { useNavigate } from 'react-router-dom';
import './style.css';
import api from '../../services/api';
import { useState } from 'react';

function Historico() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

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
            status: "agendada"
        },
        {
            id: 4,
            paciente: "Ana Oliveira",
            cpf: "456.789.123-00",
            data: "2024-03-13",
            status: "cancelada"
        }
    ];

    // Agrupa consultas por paciente
    const consultasPorPaciente = consultas.reduce((acc, consulta) => {
        const key = `${consulta.paciente}-${consulta.cpf}`;
        if (!acc[key]) {
            acc[key] = {
                paciente: consulta.paciente,
                cpf: consulta.cpf,
                consultas: []
            };
        }
        acc[key].consultas.push(consulta);
        return acc;
    }, {});

    // Converte para array e ordena alfabeticamente
    const pacientesOrdenados = Object.values(consultasPorPaciente)
        .sort((a, b) => a.paciente.localeCompare(b.paciente));

    // Filtra baseado na pesquisa
    const pacientesFiltrados = pacientesOrdenados.filter(paciente => 
        paciente.paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paciente.cpf.includes(searchTerm)
    );

    const handleVoltar = () => {
        navigate('/main');
    };

    return (
        <div className="historico-container">
            <h1>Histórico de Consultas</h1>
            
            <div className="pesquisa-container">
                <input
                    type="text"
                    placeholder="Pesquisar por nome ou CPF..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pesquisa-input"
                />
            </div>

            <div className="pacientes-lista">
                {pacientesFiltrados.map((paciente, index) => (
                    <div className="paciente-card" key={index}>
                        <div className="paciente-header">
                            <h2>{paciente.paciente}</h2>
                            <p>CPF: {paciente.cpf}</p>
                        </div>
                        
                        <div className="consultas-historico">
                            {paciente.consultas.map((consulta, consultaIndex) => (
                                <div className="consulta-item" key={consultaIndex}>
                                    <div className="consulta-data">
                                        {new Date(consulta.data).toLocaleDateString('pt-BR')}
                                    </div>
                                    <span className={`status-consulta ${consulta.status}`}>
                                        {consulta.status}
                                    </span>
                                </div>
                            ))}
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