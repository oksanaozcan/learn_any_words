import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryScreen = ({}) => {
  return(
    <View style={styles.center}>
      <Text>Category Screen</Text>
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

export default CategoryScreen;
