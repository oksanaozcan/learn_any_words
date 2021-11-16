import React from "react";
import { Text, StyleSheet } from "react-native";
import { THEME } from "../theme";

const SubText = (props) => {
  return(
  <Text style={{...styles.subText, ...props.padding}}>
    {props.children}    
  </Text>
  ) 
}

const styles = StyleSheet.create({
  subText: {
    fontSize: 14,
    fontFamily: 'OpenReg',
    textAlignVertical: 'bottom',
    color: THEME.GREY_COLOR
  }
})

export default SubText;
