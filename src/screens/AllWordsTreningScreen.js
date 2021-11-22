import React, {useState} from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, ScrollView, Button, Text } from "react-native";
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
      <View style={styles.main}>     
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
              <CommonText>{word.category.repeat(200)}</CommonText>             
            </Card>      
            <Card>
              <SubText>example:</SubText>          
              <CommonText>{word.example}</CommonText>       
              <SubText >translate example:</SubText>          
              <CommonText>{word.tr_example}</CommonText>             
            </Card>
          </View>         
        </ScrollView>
        <View style={styles.footerBtnContainer}>
          <View style={styles.btn}>
            <Button title="I know this word, scip it" onPress={() => console.log('bottombtn1')}/>
          </View>
          <View style={styles.btn}>
            <Button title="bottom_2" onPress={() => console.log('bottombtn1')}/>
          </View>         
        </View>
      </View>
      
      
    )
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    padding: 15,
    alignItems: 'center',
    width: '95%'
  },
  titleStyle: {
    textAlign: 'center',
    padding: 15,
  },    
  footerBtnContainer: {
    paddingVertical: 25,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btn: {
    width: '48%'
  },
 
})

export default AllWordsTreningScreen;