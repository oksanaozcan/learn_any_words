import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import { THEME } from "../theme";

const LearnWordsScreen = ({navigation}) => {  
  const allWordslengtn = (useSelector(state => state.word.allWords)).length
  const favoriteWordslengtn = (useSelector(state => state.word.favoriteWords)).length
  const learnedWordslengtn = (useSelector(state => state.word.learnedWords)).length
 
  return(
    <View style={styles.center}>
      <View style={styles.btnContainer}>
        <Button style={styles.btn} title="Learn All Words" onPress={() => navigation.navigate('TrenAllWords', {data: 'allWords'})} color={THEME.GREEN_COLOR} disabled={!allWordslengtn}/>
        <Button title="Learn Favorite Words" onPress={() => navigation.navigate('TrenAllWords', {data: 'favoriteWords'})} color={THEME.PINK_COLOR} disabled={!favoriteWordslengtn}/>
        <Button title="Remember learned Words" onPress={() => navigation.navigate('TrenAllWords', {data: 'learnedWords'})} color={THEME.GREY_COLOR} disabled={!learnedWordslengtn}/>
      </View>      
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    width: '93%'
  }  
})

export default LearnWordsScreen;
