import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AllWordsScreen = ({navigation}) => {
  return(
    <View style={styles.center}>
      <Text>AllWordsScreen</Text>
      <Button
        title="Go to Word Screen"
        onPress={() => navigation.navigate('Word')}
      />
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

export default AllWordsScreen;
