import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TitleText from "../components/TitleText";
import { THEME } from "../theme";
import { DATA } from "../data";

const lng = DATA.length

const MainScreen = ({navigation}) => {  
  return(
    <View >
      <TitleText>There are only <Text style={{ color: THEME.PINK_COLOR, fontSize: 30 }}> {lng} </Text> words in your dictionary</TitleText>
      <Button
        title="Go to All Words"
        onPress={() => navigation.navigate('AllWords')}
      />
      <Button
        title="Go to Caterory Screen"
        onPress={() => navigation.navigate('Category')}
      />     
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default MainScreen;
