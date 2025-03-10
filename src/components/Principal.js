import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutroJogo = require('../imgs/outros_jogos.png');

export default class Principal extends Component{
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.apresentacaoJogo}>
                <Image source={logo} />
                <TouchableHighlight
                    onPress={() => { Actions.resultado(); }}
                >
                    <Image source={btnJogar} />
                </TouchableHighlight>
            </View>
            <View style={styles.rodaPe}>
                <TouchableHighlight
                    onPress={() => { Actions.sobreJogo(); }}
                >
                    <Image source={btnSobreJogo} />
                </TouchableHighlight>    

                <TouchableHighlight
                    onPress={() => { Actions.outrosJogos(); }}
                >
                    <Image source={btnOutroJogo} />
                </TouchableHighlight>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  apresentacaoJogo:{
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodaPe:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})