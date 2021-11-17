import React from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { DATA } from "../data";
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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }  
});

export default AllWordsScreen;
