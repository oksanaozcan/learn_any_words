import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { THEME } from "../theme";

const WordItem = ({ item, openWord }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={openWord}>
    <View style={styles.item}>    
      <Text style={styles.title}>{item.word}</Text>
      <Text style={styles.cat}>[{item.category}]</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({  
  item: {
    flexDirection: 'row',
    backgroundColor: 'rgba(77,182,172,0.4)',
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
    fontFamily: 'OpenBold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    paddingEnd: 15
  },
  cat: {
    fontSize: 12,
    fontFamily: 'OpenReg',
    textAlignVertical: 'bottom',
    color: THEME.GREY_COLOR
  }
});

export default WordItem;