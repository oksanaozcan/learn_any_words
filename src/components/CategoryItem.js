import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { THEME } from "../theme";

const CategoryItem = ({ item, openCategory }) => {
  const catWords = useSelector(state => state.word.allWords.filter(w => w.category === item))
  const learnedWords = catWords.filter(w => w.learned).length

  return(
  <TouchableOpacity activeOpacity={0.7} onPress={openCategory}>
    <View style={(catWords.length === learnedWords) ? styles.itemLearned : styles.itemLearning}>    
      <Text style={styles.title}>{item}</Text>
      <Text style={styles.cat}>[{learnedWords ? learnedWords : 'no learned'} / {catWords.length}]</Text>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({  
  itemLearning: {
    flexDirection: 'row',
    backgroundColor: 'rgba(77,182,172,0.4)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  itemLearned: {
    flexDirection: 'row',
    backgroundColor: 'rgba(216,27,96,0.4)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 14,
    fontFamily: 'OpenBold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    paddingEnd: 15
  },
  cat: {
    fontSize: 14,
    fontFamily: 'OpenReg',
    textAlignVertical: 'bottom',
    color: THEME.GREY_COLOR
  }
});

export default CategoryItem;