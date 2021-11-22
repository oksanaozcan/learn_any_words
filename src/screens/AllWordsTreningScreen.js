import React, {useState} from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, ScrollView } from "react-native";
import { THEME } from "../theme";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import CommonText from "../components/CommonText";
import SubText from "../components/SubText";
import { Ionicons } from '@expo/vector-icons';

const AllWordsTreningScreen = ({}) => {
  const allWords = useSelector(state => state.word.allWords)
  const randomIndx = Math.floor(Math.random() * allWords.length)  
  
  const [word, setWord] = useState(allWords[randomIndx])
  const [showWord, setShowWord] = useState(false)

  if (!showWord) {
    return (
    <View style={styles.container}>
      <Card>
        <TitleText titleStyle={styles.titleStyle}>{word.word}</TitleText>
      </Card>
      <View>
        <Ionicons style={styles.titleStyle} name="eye-outline" size={60} color={THEME.GREY_COLOR} onPress={() => setShowWord(true)}/>             
      </View>         
    </View>
    )
  } else {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <TitleText titleStyle={styles.titleStyle}>{word.word}</TitleText>
          </Card>
          <Card thiscard={styles.thiscard}>            
            <SubText >translate:</SubText>          
            <CommonText>{word.translate}</CommonText>             
          </Card>        
          <Card>
            <SubText>synonims:</SubText>          
            <CommonText>{word.synonims}</CommonText>       
            <SubText >category:</SubText>          
            <CommonText>{word.category}</CommonText>             
          </Card>      
          <Card>
            <SubText>example:</SubText>          
            <CommonText>{word.example}</CommonText>       
            <SubText >translate example:</SubText>          
            <CommonText>{word.tr_example}</CommonText>             
          </Card>
        </View> 
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    width: '95%'
  },
  titleStyle: {
    textAlign: 'center',
    padding: 25,
  },    
  
})

export default AllWordsTreningScreen;