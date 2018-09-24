
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, SectionList} from 'react-native';

export default class Teams extends Component<Props> {
    render() {
      const width = Dimensions.get('window').width
      const height = Dimensions.get('window').height

      return (
        <SectionList
            renderItem={({item, index, section}) => (
              <View>
                <Text>Tios:</Text>
                   <Text> Tios Jairson </Text>
                   <Text> Tia Juliana </Text>
                <Text> Jovens: </Text>
                  <Text> João Paulo </Text>
                  <Text> Leonardo </Text>
              </View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <View style={{fontWeight: 'bold', flex:1, justifyContent: 'center', width: width, alignItems: 'center'}}>
                <Text style={{ fontSize: 30}}>{title}</Text>
              </View>
            )}
            sections={[
              {title: 'Equipe Secretaria', data: ['item1']},
              {title: 'Equipe Sala', data: ['item3']},
              {title: 'Equipe cozinha', data: ['item5'      ]},
            ]}
            keyExtractor={(item, index) => item + index}
        />
      );
    }
  }