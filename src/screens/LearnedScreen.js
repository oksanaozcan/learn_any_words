import React, {useLayoutEffect, useEffect} from "react";
import { StyleSheet, SafeAreaView, FlatList, View, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../theme";
import WordItem from "../components/WordItem";
import { toggleLearned, removeWord, loadWords } from "../store/actions/wordAction";

const LearnedScreen = ({navigation}) => {  
  const dispatch = useDispatch()
  const renderItem = ({ item }) => (
    <WordItem item={item} 
      openWord={() => navigation.navigate('Word', 
      {
        wordId: item.id,
        word: item.word     
      })}
    />
  );

  const learnedWords = useSelector(state => state.word.learnedWords) 

  useEffect(() => {
    dispatch(loadWords())
  }, [learnedWords, dispatch])  

  const toggleAllLearnedWords = () => 
    Alert.alert(
      `Unmark learned from all words`,
      "Words will remain available in other categories",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Clear", onPress: () => {
          learnedWords.map(obj => {
            dispatch(toggleLearned(obj))
          })                    
        }}          
      ]
    );

  const removeAllLearnedWords = () => 
  Alert.alert(
    `Remove learned words`,
    "Do you really want to remove all learned words? This action cannot be undone!",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Delete", onPress: () => {
        learnedWords.map(obj => {
          dispatch(removeWord(obj.id))
        })                      
      }}          
    ]
  );
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headericonContainer}>          
          <Ionicons name="refresh-outline" size={25} color={THEME.GREEN_COLOR} onPress={toggleAllLearnedWords}/>
          <Ionicons name="trash-outline" size={25} color={THEME.PINK_COLOR} onPress={removeAllLearnedWords}/>
        </View>            
      ),   
    });
  }, [navigation]);

  return(    
    <FlatList
      data={learnedWords}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />   
  )
}

const styles = StyleSheet.create({
  headericonContainer: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'space-between'
  }  
})

export default LearnedScreen;