import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutroJogos from './components/OutroJogos';
import Resultado from './components/Resultado';

export const Rotas = () => (
    <Router>
        <Scene sceneStyle={{ color: '#61BD8C', paddingTop:50 }}>
        <Scene key='principal' component={Principal} title='CARA OU COROA'/>
        <Scene key='sobreJogo' component={SobreJogo} title='Sobre o Jogo'/>
        <Scene key='outrosJogos' component={OutroJogos} title='Outros Jogos'/>
        <Scene key='resultado' component={Resultado} title='Resultado'/>
        </Scene>  
    </Router>
);

