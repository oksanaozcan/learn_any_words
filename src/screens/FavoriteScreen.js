import React from "react";
import { StyleSheet, SafeAreaView, FlatList, StatusBar } from "react-native";
import { DATA } from "../data";
import WordItem from "../components/WordItem";

const FavoriteScreen = ({navigation}) => {
  
  const myFavorite = DATA.filter(obj => obj.favorite);  

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
        data={myFavorite}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})

export default FavoriteScreen;