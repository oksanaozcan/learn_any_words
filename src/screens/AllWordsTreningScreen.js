import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { THEME } from "../theme";

const AllWordsTreningScreen = ({}) => {
  return(
    <View style={styles.center}>
      <Text>All words trening screen</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
})

export default AllWordsTreningScreen;