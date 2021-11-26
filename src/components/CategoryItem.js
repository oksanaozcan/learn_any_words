import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements'

const CategoryItem = ({ item, openCategory }) => {
  const catWords = useSelector(state => state.word.allWords.filter(w => w.category === item))
  const learnedWords = catWords.filter(w => w.learned).length
  return (   
    <View>
    <ListItem style={styles.container} bottomDivider onPress={openCategory}>   
      <ListItem.Title>{item ? item : 'not name'}</ListItem.Title>  
      <ListItem.Content>        
        <ListItem.Subtitle>[{learnedWords ? learnedWords : 'no learned'} / {catWords.length}]</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <View style={{...styles.progressLine, ...{width: `${Math.floor((100 / catWords.length) * learnedWords)}%`}}}></View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    position: 'relative'
  },
  progressLine: {
    position: 'absolute',    
    height: '100%',
    backgroundColor: 'rgba(77,182,172,0.28)'
  }
});

export default CategoryItem;