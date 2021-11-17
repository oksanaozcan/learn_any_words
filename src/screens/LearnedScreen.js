import React from "react";
import { StyleSheet, SafeAreaView, FlatList, StatusBar } from "react-native";
import { DATA } from "../data";
import WordItem from "../components/WordItem";

const LearnedScreen = ({navigation}) => {
  
  const myLearned = DATA.filter(obj => obj.learned);  

  const renderItem = ({ item }) => (
    <WordItem item={item} 
      openWord={() => navigation.navigate('Word', 
      {
        wordId: item.id,
        word: item.word     
      })}
    />
  );

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={myLearned}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})

export default LearnedScreen;