import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";
import WordItem from "../components/WordItem";

const AllWordsScreen = ({navigation}) => {
  
  const renderItem = ({ item }) => (
    <WordItem item={item} 
      openWord={() => navigation.navigate('Word', 
      {
        wordId: item.id,
        word: item.word       
      })}
    />
  );

  const allWords = useSelector(state => state.word.allWords)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={allWords}
        renderItem={renderItem}
        keyExtractor={item => item.id} 
        inverted
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default AllWordsScreen;
