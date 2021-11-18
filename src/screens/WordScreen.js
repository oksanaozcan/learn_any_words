import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Image, ScrollView, Alert } from "react-native";
import SubText from "../components/SubText";
import TitleText from "../components/TitleText";
import CommonText from "../components/CommonText";
import Card from "../components/Card";
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../theme";
import MyButton from "../components/MyButton";

const WordScreen = ({route, navigation}) => {
  const {wordId} = route.params;
  const myWord = useSelector(state => state.word.allWords.find(item => item.id.toString() === wordId.toString()))  

  const removeWord = () => 
    Alert.alert(
      `Remove ${myWord.word}`,
      "Do you really want to remove this word? This action cannot be undone!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => console.log("OK Pressed") }
      ]
    );

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
    <View style={styles.btnContainer}>
      <MyButton title="edit" onPress={() => navigation.navigate('Edit')} color={THEME.GREEN_COLOR}/>
      <MyButton title="delete" onPress={removeWord} color={THEME.PINK_COLOR}/>
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
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15
  }
  
})

export default WordScreen;
