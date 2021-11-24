import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { THEME } from "../theme";
import { Divider } from 'react-native-elements';

const CategoryItem = ({ item, openCategory }) => {
  const catWords = useSelector(state => state.word.allWords.filter(w => w.category === item))
  const learnedWords = catWords.filter(w => w.learned).length

  return(
  <TouchableOpacity activeOpacity={0.7} onPress={openCategory}>
    <Divider orientation="horizontal"/>
    <View style={styles.wrap}>
      <View style={(catWords.length === learnedWords) ? styles.itemLearned : styles.itemLearning}>    
        <Text style={styles.title}>{item}</Text>
        <Text style={styles.cat}>[{learnedWords ? learnedWords : 'no learned'} / {catWords.length}]</Text>     
      </View>
      <View style={{...styles.dividerContainer, ...{width: `${Math.floor((100 / catWords.length) * learnedWords)}%`}}}><Divider width={5} orientation="horizontal" color={(catWords.length === learnedWords) ? THEME.GREY_COLOR : THEME.GREEN_COLOR}/></View>
    </View> 
    <Divider orientation="horizontal"/>    
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({  
  wrap: {    
    width: '100%',    
    position: 'relative',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 1
  }, 
  dividerContainer: {   
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  itemLearning: {
    flexDirection: 'row',
    backgroundColor: 'rgba(77,182,172,0.4)',
    paddingVertical: 15,
    paddingHorizontal: 30,    
    width: '100%'
  },
  itemLearned: {
    flexDirection: 'row',
    backgroundColor: 'rgba(120,144,156,0.4)',
    paddingVertical: 15,
    paddingHorizontal: 30,    
    width: '100%',    
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