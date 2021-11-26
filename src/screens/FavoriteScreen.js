import React, {useLayoutEffect, useEffect} from "react";
import { StyleSheet, FlatList, View, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import WordItem from "../components/WordItem";
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../theme";
import { toggleFavorite, removeWord, loadWords } from "../store/actions/wordAction";

const FavoriteScreen = ({navigation}) => {
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

  const favoriteWords = useSelector(state => state.word.favoriteWords)
  useEffect(() => {
    dispatch(loadWords())
  }, [favoriteWords, dispatch])  

  const toggleAllFavoriteWords = () => 
    Alert.alert(
      `Unmark favorite from all words`,
      "Words will remain available in other categories",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Clear", onPress: () => {
          favoriteWords.map(obj => {
            dispatch(toggleFavorite(obj))
          })                    
        }}          
      ]
    );

  const removeAllFavoriteWords = () => 
  Alert.alert(
    `Remove favorite words`,
    "Do you really want to remove all favorite words? This action cannot be undone!",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Delete", onPress: () => {
        favoriteWords.map(obj => {
          dispatch(removeWord(obj.id))
        })                      
      }}          
    ]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headericonContainer}>          
          <Ionicons name="heart-dislike" size={25} color={THEME.PINK_COLOR} onPress={toggleAllFavoriteWords}/>
          <Ionicons name="trash-outline" size={25} color={THEME.PINK_COLOR} onPress={removeAllFavoriteWords}/>
        </View>            
      ),   
    });
  }, [navigation]);

  return(    
      <FlatList
        data={favoriteWords}
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

export default FavoriteScreen;