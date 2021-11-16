import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {DATA} from '../data';

const WordScreen = ({route, navigation}) => {
  const {wordId} = route.params;

  const myWord = DATA.find(word => word.id.toString() === wordId.toString());

  return(
    <View style={styles.center}>
      <Text>{myWord.word}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default WordScreen;
