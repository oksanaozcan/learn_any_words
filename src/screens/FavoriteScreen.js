import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import WordItem from "../components/WordItem";

const FavoriteScreen = ({navigation}) => {
  
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

  return(
    <SafeAreaView>
      <FlatList
        data={favoriteWords}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})

export default FavoriteScreen;