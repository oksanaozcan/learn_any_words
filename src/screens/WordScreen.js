import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WordScreen = ({}) => {
  return(
    <View style={styles.center}>
      <Text>Word Screen</Text>
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
