import { useNavigate } from 'react-router-dom';
import videoIcon from '../../assets/video-icon.png';
import folderIcon from '../../assets/folder-icon.png';
import cancelIcon from '../../assets/cancel-icon.png';
import fotoPerfil from '../../assets/foto-perfil.jpg';
import './style.css';

function Main() {
    const navigate = useNavigate();

    const handleVisualizarClick = () => {
        navigate('/visualizar');
    };

    const handleEditarPerfil = () => {
        navigate('/editar-perfil');
    };

    const handleHistoricoClick = () => {
        navigate('/historico');
    };

    return (
        <div className="main-container">
            
            <div className="profile-photo" onClick={handleEditarPerfil}>
                <img src={fotoPerfil} alt="Perfil" />
            </div>

            <div className="cards-container">
                <div className="card" onClick={handleVisualizarClick}>
                    <div className="card-icon blue">
                        <img src={videoIcon} alt="Visualizar" className="icon-image" />
                    </div>
                    <span>Visualizar Consultas</span>
                </div>

                <div className="card" onClick={handleHistoricoClick}>
                    <div className="card-icon yellow">
                        <img src={folderIcon} alt="Histórico" className="icon-image" />
                    </div>
                    <span>Histórico de consultas</span>
                </div>

                <div className="card">
                    <div className="card-icon red">
                        <img src={cancelIcon} alt="Cancelar" className="icon-image" />
                    </div>
                    <span>Cancelar Consulta</span>
                </div>
            </div>
        </div>
    );
}

export default Main;
