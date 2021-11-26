import React, {useState, useEffect, useLayoutEffect} from "react";
import { FlatList, StyleSheet, TouchableWithoutFeedback, Keyboard, View, Alert } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import WordItem from "../components/WordItem";
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../theme";
import { removeWord, loadWords } from "../store/actions/wordAction";

const AllWordsScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const allWords = useSelector(state => state.word.allWords)
  const [search, setSearch] = useState ('')

  useEffect(() => {
    dispatch(loadWords())
  }, [allWords, dispatch])  

  const removeAllWords = () => 
  Alert.alert(
    `Remove All Words`,
    "Do you really want to remove all words? This action cannot be undone!",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Delete", onPress: () => {
        allWords.map(obj => {
          dispatch(removeWord(obj.id))
        })        
        navigation.navigate("Main")              
      }}          
    ]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headericonContainer}>                    
          <Ionicons name="trash-outline" size={25} color={THEME.PINK_COLOR} onPress={removeAllWords}/>
        </View>            
      ),   
    });
  }, [navigation]);

  const renderItem = ({ item }) => (    
    <WordItem item={item} openWord={() => navigation.navigate('Word', { wordId: item.id, word: item.word })}/>
    
  ); 

  const updateSearch = str => {
    setSearch(str)
  }

  return (     
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
  },
  headericonContainer: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'space-between'
  }  
});

export default AllWordsScreen;
