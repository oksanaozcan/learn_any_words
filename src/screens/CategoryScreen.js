import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { DATA } from "../data";
import WordItem from "../components/WordItem";

const CategoryScreen = ({route, navigation}) => {
  const {openCategory} = route.params;
  const myCategory = DATA.filter(obj => obj.category === openCategory);  

  const renderItem = ({ item }) => (
    <WordItem item={item} 
      openWord={() => navigation.navigate('Word', 
      {
        wordId: item.id        
      })}
    />
  );

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
