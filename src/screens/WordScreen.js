import React, {useEffect, useLayoutEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import SubText from "../components/SubText";
import TitleText from "../components/TitleText";
import CommonText from "../components/CommonText";
import Card from "../components/Card";
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../theme";
import { toggleFavorite, toggleLearned, removeWord } from "../store/actions/wordAction";

const WordScreen = ({route, navigation}) => {
  const dispath = useDispatch()
  const {wordId} = route.params;
  const myWord = useSelector(state => state.word.allWords.find(item => item.id.toString() === wordId.toString()))  

  const flagFav = useSelector(state => 
    state.word.favoriteWords.some(word => word.id.toString() === wordId.toString()))

  const flagLearned = useSelector(state => 
    state.word.learnedWords.some(word => word.id.toString() === wordId.toString()))

  const removeWordHandler = () => 
    Alert.alert(
      `Remove ${myWord.word}`,
      "Do you really want to remove this word? This action cannot be undone!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => {
          navigation.goBack()
          dispath(removeWord(wordId))          
        }}          
      ]
    );

    const toggleFavHandler = () => {
      dispath(toggleFavorite(myWord))      
    }

    const toggleLearnedHandler = () => {    
      dispath(toggleLearned(myWord))      
    }

    useEffect(() => {
      //set params if need dispatch to params
    }, [flagFav, flagLearned, myWord])

    if (!myWord) {
      navigation.goBack()
      return null
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.headericonContainer}>
            <Ionicons name="pencil-outline" size={25} color={THEME.GREEN_COLOR} onPress={() => navigation.navigate('Edit', {myWord: myWord})}/>
            <Ionicons name="trash-outline" size={25} color={THEME.PINK_COLOR} onPress={removeWordHandler}
            />
          </View>            
        ),   
      });
    }, [navigation]);

  return(
    <ScrollView>    
    <View style={styles.wrap}> 
      <View style={styles.imgIconsWrap}>               
        <View style={styles.iconsContainer}>
        <Ionicons name={myWord.favorite ? 'heart' : 'heart-outline'} size={25} color={myWord.favorite ? THEME.PINK_COLOR : THEME.GREY_COLOR} onPress={toggleFavHandler}/>  
        <Ionicons name={myWord.learned ? 'school' : 'school-outline'} size={25} color={myWord.learned ? THEME.MAIN_COLOR : THEME.GREY_COLOR} onPress={toggleLearnedHandler}/>  
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
  headericonContainer: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'space-between'
  }
  
})

export default WordScreen;
