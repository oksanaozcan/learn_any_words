import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { THEME } from "../theme";

const CategoryItem = ({ item, openCategory }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={openCategory}>
    <View style={styles.item}>    
      <Text style={styles.title}>{item}</Text>
      <Text style={styles.cat}>[0 / 25]</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({  
  item: {
    flexDirection: 'row',
    backgroundColor: 'rgba(77,182,172,0.4)',
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