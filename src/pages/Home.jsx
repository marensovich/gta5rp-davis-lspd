import '../App.css';
import { useNavigate } from 'react-router-dom';
import lspdLogo from '../fractions/lspd/img/lspd-logo.jpg';

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
                <div className="faction-card" onClick={() => navigate('/lspd')}>
                    <img src={lspdLogo} alt="LSSD" className="faction-logo" />
                    <p className="faction-name">LSSD</p>
                </div>
                <div className="faction-card" onClick={() => navigate('/lspd')}>
                    <img src={lspdLogo} alt="FIB" className="faction-logo" />
                    <p className="faction-name">FIB</p>
                </div>
                <div className="faction-card" onClick={() => navigate('/lspd')}>
                    <img src={lspdLogo} alt="EMS" className="faction-logo" />
                    <p className="faction-name">EMS</p>
                </div>
                <div className="faction-card" onClick={() => navigate('/lspd')}>
                    <img src={lspdLogo} alt="GOV" className="faction-logo" />
                    <p className="faction-name">GOV</p>
                </div>
                <div className="faction-card" onClick={() => navigate('/lspd')}>
                    <img src={lspdLogo} alt="SASPA" className="faction-logo" />
                    <p className="faction-name">SASPA</p>
                </div>
            </div>
        </div>
    );
}
