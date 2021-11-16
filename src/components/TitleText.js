import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props) => {
  return(
  <Text style={{...styles.titleText, ...props.titleStyle}}>
    {props.children}    
  </Text>
  ) 
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontFamily: 'OpenBold',
    textAlignVertical: 'bottom',    
    textTransform: 'capitalize',
    letterSpacing: 1.5
  }
})

export default TitleText;
