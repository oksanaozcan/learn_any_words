import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import SubText from "../components/SubText";
import TitleText from "../components/TitleText";
import CommonText from "../components/CommonText";
import Card from "../components/Card";
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../theme";

const WordScreen = ({route, navigation}) => {
  const {wordId} = route.params;
  const myWord = useSelector(state => state.word.allWords.find(item => item.id.toString() === wordId.toString()))  

  return(
    <ScrollView>    
    <View style={styles.wrap}> 
      <View style={styles.imgIconsWrap}>
        <Image style={styles.img} source={{uri: myWord.img}}/>        
        <View style={styles.iconsContainer}>
        <Ionicons name={myWord.favorite ? 'heart' : 'heart-outline'} size={25} color={myWord.favorite ? THEME.PINK_COLOR : THEME.GREY_COLOR} onPress={() =>{}}/>  
        <Ionicons name={myWord.learned ? 'school' : 'school-outline'} size={25} color={myWord.learned ? THEME.MAIN_COLOR : THEME.GREY_COLOR} onPress={() => {}}/>  
        </View>
      </View>              
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
    padding: 20,
    alignItems: 'center'    
  },
  img: {
    width: '50%',
    height: 90
  },  
  titleStyle: {
    paddingLeft: 30
  },
  imgIconsWrap: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-end',    
    justifyContent: 'space-between'
  },
  iconsContainer: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-between'
  },  
  
})

export default WordScreen;
