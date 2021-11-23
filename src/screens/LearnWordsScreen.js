import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { THEME } from "../theme";

const LearnWordsScreen = ({navigation}) => {  
  return(
    <View style={styles.center}>
      <View style={styles.btnContainer}>
        <Button title="Learn All Words" onPress={() => navigation.navigate('TrenAllWords', {data: 'allWords'})} color={THEME.GREEN_COLOR}/>
        <Button title="Learn Favorite Words" onPress={() => navigation.navigate('TrenAllWords', {data: 'favoriteWords'})} color={THEME.PINK_COLOR}/>
      </View>      
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    width: '93%'
  },  
})

export default LearnWordsScreen;
