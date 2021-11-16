import React from "react";
import { Text, StyleSheet } from "react-native";

const CommonText = (props) => {
  return(
  <Text style={{...styles.commonText, ...props.commonStyle}}>
    {props.children}    
  </Text>
  ) 
}

const styles = StyleSheet.create({
  commonText: {
    fontFamily: 'OpenReg',
    fontSize: 18,
    paddingLeft: 30
  }
})

export default CommonText;