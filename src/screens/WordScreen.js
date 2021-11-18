import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import SubText from "../components/SubText";
import TitleText from "../components/TitleText";
import CommonText from "../components/CommonText";
import Card from "../components/Card";

const WordScreen = ({route, navigation}) => {
  const {wordId} = route.params;
  const myWord = useSelector(state => state.word.allWords.find(item => item.id.toString() === wordId.toString()))  

  return(
    <ScrollView>    
    <View style={styles.wrap}>      
      <Image style={styles.img} source={{uri: myWord.img}}/>     
      <Card>
        <SubText>word:</SubText>          
        <TitleText titleStyle={styles.titleStyle}>{myWord.word}</TitleText>       
        <SubText >translate:</SubText>          
        <CommonText>{myWord.translate}</CommonText>             
      </Card>      
      <Card>
        <SubText>synonims:</SubText>          
        <CommonText>{myWord.synonims}</CommonText>       
        <SubText >category:</SubText>          
        <CommonText>{myWord.category}</CommonText>             
      </Card>      
      <Card>
        <SubText>example:</SubText>          
        <CommonText>{myWord.example}</CommonText>       
        <SubText >translate example:</SubText>          
        <CommonText>{myWord.tr_example}</CommonText>             
      </Card>    
    </View>
    </ScrollView>    
  )
}

const styles = StyleSheet.create({
  
  wrap: {
    padding: 20
  },
  img: {
    width: '50%',
    height: 90
  },  
  titleStyle: {
    paddingLeft: 30
  }
  
})

export default WordScreen;
