import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import WordItem from "../components/WordItem";

const LearnedScreen = ({navigation}) => {  

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

  return(
    <SafeAreaView>
      <FlatList
        data={learnedWords}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})

export default LearnedScreen;