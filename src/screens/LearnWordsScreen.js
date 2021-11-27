import React from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import { ListItem } from 'react-native-elements'
import { useSelector } from "react-redux";
import { THEME } from "../theme";
import TitleText from '../components/TitleText';

const LearnWordsScreen = ({navigation}) => {  
  const allWordslengtn = (useSelector(state => state.word.allWords)).length
  const favoriteWordslengtn = (useSelector(state => state.word.favoriteWords)).length
  const learnedWordslengtn = (useSelector(state => state.word.learnedWords)).length
  const allCategories = useSelector(state => state.word.categories)

  const renderItem = ({ item }) => (
  <ListItem bottomDivider onPress={() => navigation.navigate('TrenAllWords', {data: item })}>    
    <ListItem.Content>
      <ListItem.Title>{item ? item : 'not name'}</ListItem.Title>      
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)
 
  return(    
    <View style={styles.btnContainer}>
      <View style={styles.btn}>
        <Button title="Learn All Words" onPress={() => navigation.navigate('TrenAllWords', {data: 'allWords'})} color={THEME.GREEN_COLOR} disabled={!allWordslengtn}/>
      </View>   
      <View style={styles.btn}>
        <Button title="Learn Favorite Words" onPress={() => navigation.navigate('TrenAllWords', {data: 'favoriteWords'})} color={THEME.PINK_COLOR} disabled={!favoriteWordslengtn}/>
      </View>   
      <View style={styles.btn}>
        <Button title="Remember learned Words" onPress={() => navigation.navigate('TrenAllWords', {data: 'learnedWords'})} color={THEME.GREY_COLOR} disabled={!learnedWordslengtn}/>
      </View>            
      <TitleText titleStyle={styles.titleStyle}> Your Categories: </TitleText>
      <FlatList keyExtractor={item => item} data={allCategories} renderItem={renderItem}/>
    </View>      
   
  )
}

const styles = StyleSheet.create({    
  titleStyle: {
    textAlign: 'center',
    padding: 10
  },
  btn: {
    marginTop: 10
  }
})

export default LearnWordsScreen;
