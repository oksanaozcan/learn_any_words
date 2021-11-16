import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {DATA} from '../data';
import SubText from "../components/SubText";
import TitleText from "../components/TitleText";
import CommonText from "../components/CommonText";
import Card from "../components/Card";

const WordScreen = ({route, navigation}) => {
  const {wordId} = route.params;
  const myWord = DATA.find(word => word.id.toString() === wordId.toString());

  return(
    <View style={styles.wrap}>
      <Image style={styles.img} source={{uri: myWord.img}}/>
      <Card>
        <SubText>word:</SubText>          
        <TitleText titleStyle={styles.titleStyle}>{myWord.word}</TitleText>       
        <SubText >translate:</SubText>          
        <CommonText>{myWord.translate}</CommonText>             
      </Card>      
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 20
  },
  img: {
    width: '60%',
    height: '35%'
  },
  card: {
    
  },  
  titleStyle: {
    paddingLeft: 30
  }
  
})

export default WordScreen;
