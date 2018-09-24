/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,  View, ScrollView, TouchableOpacity, Dimensions, Button, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Teams from './src/Teams'
import Music from './src/Music'
import Photos from './src/Photos'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = { container: 'Teams', isLogged: false, password: '' }
  }

  setContainer(container) {
    this.setState({ container })
  }

  setPassword(password) {
    this.setState({ password })
  }

  setisLogged(isLogged) {
    this.setState({ isLogged })
  }

  verifyPassword() {
    const { password } = this.state

    console.log(password)

    if(password === 'XEJC2019'){
      this.setisLogged(true)
    }
  }

  renderApp() {
    const { container } = this.state
    return (
      <View style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.textNavbar}>X EJC</Text>
        </View>
        <View style={{ flex: 0.1, backgroundColor: '#eceeef', flexDirection: 'row', marginBottom: 20}}>
            <TouchableHighlight style={{ flex: 0.33, justifyContent:'center', alignItems: 'center'}} onPress={() => this.setContainer('Teams')}>
              <Icon name="align-justify" size={25}/>
            </TouchableHighlight>
            <TouchableHighlight style={{ flex: 0.33, justifyContent:'center', alignItems: 'center', borderRightWidth: 1, borderLeftWidth: 1}} onPress={() => this.setContainer('Photos')}>
              <Icon name="camera" size={25} />
            </TouchableHighlight>
            <TouchableHighlight style={{ flex: 0.34, justifyContent:'center', alignItems: 'center'}} onPress={() => this.setContainer('Music')}> 
              <Icon name="music" size={25} />
            </TouchableHighlight>
        </View>
        <ScrollView style={{ flex: 0.7, width: width }}>
          {container === 'Teams' && <Teams />}
          {container === 'Photos' && <Photos />}
          {container === 'Music' && <Music />}
        </ScrollView>
      </View>
    );
  }

  renderLogin() {
    return(
      <View style={{ flex: 1,  backgroundColor: '#ffcc00', justifyContent:'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 35, fontWeight: 'bold' }}> X EJC </Text>
        <View style= {{width: width, flexDirection: 'row', alignItems: 'center', justifyContent:'center', flex: 0.2, marginBottom: 15}} >
          <TextInput
            style= {{ backgroundColor:'white', borderRadius: 10, flex: 0.8, color:'black' }} 
            placeholder="Digite a senha"
            onChangeText={(text) => this.setPassword(text)}>
          </TextInput>
        </View>
        <TouchableOpacity onPress={() => this.verifyPassword()} style={{ borderRadius: 10, backgroundColor: 'blue', width: 80, height: 30}} >
          <Text style={{ color:'white', fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>Entrar</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { isLogged } = this.state
    return (
      <View style={{ flex: 1}}>
        {isLogged && this.renderApp()}
        {!isLogged && this.renderLogin()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ffcc00'
  },
  textNavbar: {
    fontWeight: 'bold',
    fontSize: 35,
  }
});
