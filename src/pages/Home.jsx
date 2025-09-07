import '../App.css';
import { useNavigate } from 'react-router-dom';
import lspdLogo from '../fractions/lspd/img/gta5rp-logo.png';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="home-title">Выбор фракции</h1>

            <div className="faction-cards">
                <div className="faction-card" onClick={() => navigate('/lspd')}>
                    <img src={lspdLogo} alt="LSPD" className="faction-logo" />
                    <p className="faction-name">LSPD</p>
                </div>
            </div>
        </div>
    );
}
