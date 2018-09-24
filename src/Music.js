import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Sound from 'react-native-sound-player';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(240,240,240,1)',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    padding: 7,
  },
  header: {
    textAlign: 'left',
  },
  feature: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
});

const Button = ({title, onPress, style}) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={styles.button}>{title}</Text>
  </TouchableOpacity>
);

const Header = ({children, style}) => <Text style={[styles.header, style]}>{children}</Text>;

const Feature = ({title = 'teste1', onPlay, onStop}) => (
  <View style={styles.feature}>
    <Header style={{flex: 1}}>{title}</Header>
    <Button title="PLAY" onPress={onPlay} style={{ marginRight: 10 }}/>
    <Button title="STOP" onPress={onStop} />
  </View>
);

function playSound(name) {
  try {
    Sound.playSoundFile(name, 'mp3')
  } catch (e) {
    console.log(`cannot play the sound file`, e)
  }
    
}

function stopSound() {
  Sound.stop();
}

class Music extends Component {
  render() {
    const musics =[
      { name: 'nas_asas_do_senhor', title: 'Nas asas do senhor'},
      { name: 'alegria_da_minha_juventude', title: 'Alegria da minha juventude'},
      { name: 'minha_essencia', title: 'Minha essencia'}
    ]
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
        {musics.map(music => { 
          return (
            <Feature
              title={music.title}
              key={music.name}
              onPlay={() => {
                return playSound(music.name)
              }}
              onStop={() => {
                return stopSound()
              }}
            />
            )
        })}
      </ScrollView>
    );
  }
}

export default Music;