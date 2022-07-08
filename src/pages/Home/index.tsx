import React from 'react';

import './styles.css';

import backgroundTop from '../../assets/parking-photo.jpeg';
import logo from '../../assets/144x144.png';
import parking1 from '../../assets/parking-photo-1.jpeg';
import parking2 from '../../assets/parking-photo-2.png';
import parkingStreets from '../../assets/parking-street.png';
import app from '../../assets/apps.jpeg';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
        <div className='Container'>
            <div className='parent'>
                <img className='backgroundTop' src={backgroundTop} width="100%" height="573" alt="foto estacionamento"/>
                <img className='logo' src={logo} alt="logo parkcar"/>
                <p className='explain-text'>Chegou ParkCar <br></br>
                o aplicativo que te informa os estacionamentos conveniados, <br />
                vagas nas ruas do centro da cidade onde você pode estacionar e a quantidade.
                </p>
            </div>

            <div className='phrase'>

                <div id='howItWorks'>
                    <h1>COMO FUNCIONA</h1>
                </div>
                <div className='howItWorksContainer'>
                    <div id='textExplainHowItWorld'>
                        1º. Instale o aplicativo ParkCar; <br></br>
                        2º. Faça o cadastro no app; <br></br>
                        3º. Cadastre seu veículo; <br></br>
                        4º. Compre créditos; <br></br>
                        5º. No app, informe seu destino e ele lhe mostrará estacionamentos e vagas nas ruas; <br></br>
                        6º. No estacionamento, informe a placa ao atendente ou uma câmera identificará sua placa. <br></br>
                        7º. Na saída informe a placa, ou a câmera identificará o mesmo e o sistema debita o valor de permanência dos seus créditos! <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div id='imageParking'>
                        <img src={parking1} width="80%" alt="" />
                    </div>
                </div>
            </div>

            <div className='phrase'>

                <div id='whereCanIuse'>
                    <h1>ONDE POSSO USAR</h1>
                </div>
                <div className='howItWorksContainer'>
                    <div id='imageParking'>
                        <img src={parking2} width="80%" alt="" />
                    </div>
                    <div id='textExplainHowItWorld'>
                        √ Shoppings; <br></br>
                        √ Supermercados; <br></br>
                        √ Pedágios; <br></br>
                        √ Hospitais; <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>

            <div className='phrase'>

                <div id='benefits'>
                    <h1>BENEFÍCIOS</h1>
                </div>
                <div className='howItWorksContainer'>
                    <div id='textExplainBenefits'>
                        <div id='withParkCarYou'>
                            <h1>Com ParkCar você:</h1>
                        </div>
                        <div id='benefitsPoints'>
                        √ Ganha tempo na hora de estacionar. <br></br>
                        √ Evita filas para pagar o ticket. <br></br>
                        √ Controle de tempo de permanência. <br></br>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div id='imageParkingStreets'>
                        <img src={parkingStreets} width="80%" alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div id='knowOurApp'>
                    <h1>CONHEÇA NOSSO APLICATIVO</h1>
                </div>
                <div id='screensApp'>
                    <img src={app} alt="telas do aplicativo" />
                </div>

            </div>

            <div id='privatePolitics'>
              <Link to={"./PrivacyPolicy"}>Política de Privacidade</Link>
          </div>
        </div>
    );
}

export default Home;