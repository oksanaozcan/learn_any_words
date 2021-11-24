import React, {useState} from "react";
import { SafeAreaView, FlatList, StyleSheet, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { useSelector } from "react-redux";
import WordItem from "../components/WordItem";
import { SearchBar } from 'react-native-elements';

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
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>      
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
        </View>    
      </TouchableWithoutFeedback>
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
