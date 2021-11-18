import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import WordItem from "../components/WordItem";

const CategoryScreen = ({route, navigation}) => {
  const {openCategory} = route.params;
  const myCategory = useSelector(state => state.word.allWords.filter(item => item.category === openCategory))
  
  const renderItem = ({ item }) => (
    <WordItem item={item} 
      openWord={() => navigation.navigate('Word', 
      {
        wordId: item.id,
        word: item.word     
      })}
    />
  );

  if (myCategory.length == 0) {
    navigation.navigate('Main')
  }

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={myCategory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})

export default CategoryScreen;