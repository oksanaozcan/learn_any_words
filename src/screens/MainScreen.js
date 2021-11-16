import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MainScreen = ({navigation}) => {
  return(
    <View style={styles.center}>
      <Text>Main Screen</Text>
      <Button
        title="Go to All Words"
        onPress={() => navigation.navigate('AllWords')}
      />
      <Button
        title="Go to Caterory Screen"
        onPress={() => navigation.navigate('Category')}
      />
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

export default MainScreen;
