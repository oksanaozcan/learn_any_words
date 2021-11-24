import React, {useState} from "react";
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";
import WordItem from "../components/WordItem";
import { SearchBar } from 'react-native-elements';
import { THEME } from "../theme";

const AllWordsScreen = ({navigation}) => {
  const allWords = useSelector(state => state.word.allWords)
  const [search, setSearch] = useState ('')

  const renderItem = ({ item }) => (
    <WordItem item={item} 
      openWord={() => navigation.navigate('Word', 
      {
        wordId: item.id,
        word: item.word       
      })}
    />
  ); 

  const updateSearch = str => {
    setSearch(str)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
      placeholder="Search Words..."
      onChangeText={updateSearch}
      value={search}
      containerStyle={styles.containerStyle} 
      inputContainerStyle={styles.inputContainerStyle}
    />
      <FlatList
        data={search ? allWords.filter(item => item.word.toLowerCase().includes(search.toLowerCase())) : allWords}
        renderItem={renderItem}
        keyExtractor={item => item.id} 
        inverted
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#eceff1',
    borderBottomColor: '#fff',
    borderTopColor: '#fff'    
  },
  inputContainerStyle: {
    backgroundColor: '#fff'
  }
});

export default AllWordsScreen;
