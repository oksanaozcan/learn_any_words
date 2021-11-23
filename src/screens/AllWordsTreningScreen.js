import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, ScrollView } from "react-native";
import { THEME } from "../theme";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import CommonText from "../components/CommonText";
import SubText from "../components/SubText";
import { Ionicons } from '@expo/vector-icons';
import FooterBtnGroup from "../components/FooterBtnGroup";
import { toggleLearned } from "../store/actions/wordAction";

const AllWordsTreningScreen = ({route}) => {
  const {data} = route.params
  let dataArray;
  
  if (data === 'allWords') {
    dataArray = useSelector(state => state.word.allWords)
  } else if (data === 'favoriteWords') {
    dataArray = useSelector(state => state.word.favoriteWords)
  } else if (data === 'learnedWords') {
    dataArray = useSelector(state => state.word.learnedWords)
  }  
  
  const randomIndx = Math.floor(Math.random() * dataArray.length)   
  const dispatch = useDispatch()  
  
  const [word, setWord] = useState(dataArray[randomIndx])
  const [showWord, setShowWord] = useState(false)

  const addToLearnedHandler = () => {
    if (word.learned){
      let indx = Math.floor(Math.random() * dataArray.length)  
      setWord(dataArray[indx])      
    } else {
      dispatch(toggleLearned(word))
      let indx = Math.floor(Math.random() * dataArray.length)  
      setWord(dataArray[indx]) 
    }         
  }

  const learnWordHandler = () => {
    let indx = Math.floor(Math.random() * dataArray.length)  
    setWord(dataArray[indx]);
  }

  if (!showWord) {
    return (
    <View style={styles.main}>      
      <View style={styles.container}>
        <SubText>{word.learned ? 'remembe word' : 'new word'}</SubText>
        <Card>
          <TitleText titleStyle={styles.titleStyle}>{word.word}</TitleText>
        </Card>
        <View>
          <Ionicons style={styles.titleStyle} name="eye-outline" size={60} color={THEME.GREY_COLOR} onPress={() => setShowWord(true)}/>             
        </View>
      </View>
      <FooterBtnGroup learnWordHandler={learnWordHandler} addToLearnedHandler={addToLearnedHandler}/>
    </View>
    )
  } else {
    return (
      <View style={styles.main}>  
        <ScrollView style={styles.cardWrap}>
          <View style={styles.container}>    
          <SubText>{word.learned ? 'remembe word' : 'new word'}</SubText>        
            <Card>
              <TitleText titleStyle={styles.titleStyle}>{word.word}</TitleText>
            </Card>         
            <Card>            
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
        <FooterBtnGroup learnWordHandler={learnWordHandler} addToLearnedHandler={addToLearnedHandler}/>
      </View>
      
      
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    padding: 15,
    alignItems: 'center',
    width: '95%'
  },
  cardWrap: {
    width: '100%'
  },
  titleStyle: {
    textAlign: 'center',
    padding: 15,
  },    
  footerBtnContainer: {
    paddingVertical: 25,
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btn: {
    width: '48%'
  },
 
})

export default AllWordsTreningScreen;