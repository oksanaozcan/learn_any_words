import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddWordScreen = ({}) => {
  return(
    <View style={styles.center}>
      <Text>Add Word Screen</Text>
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

export default AddWordScreen;
