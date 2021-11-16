import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditWordScreen = ({}) => {
  return(
    <View style={styles.center}>
      <Text>EDIT Word Screen</Text>
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

export default EditWordScreen;
