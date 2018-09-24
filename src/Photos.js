
import React, {Component} from 'react';
import Lightbox from 'react-native-lightbox';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, SectionList, Image} from 'react-native';

export default class Photos extends Component<Props> {
    render() {
      const width = Dimensions.get('window').width
      const height = Dimensions.get('window').height

      return (
        <SectionList
            renderItem={({item, index, section}) => (
              <View key={index} style={{backgroundColor:'black', margin: 10}}>
                <Lightbox>
                  <Image style={{resizeMode: 'contain', height: 400, width: 400}} source={item.image}/> 
                </Lightbox>
              </View>
            )}

            sections={[{
              data: [{image: require("./e1.jpeg")},{image: require("./e2.jpeg")},{image: require("./e3.jpeg")}]
            }]}
            keyExtractor={(item, index) => item + index}
        />
      );
    }
  }