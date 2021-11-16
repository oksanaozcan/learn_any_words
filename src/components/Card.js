import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../theme";

const Card =(props) => {
  return (
    <View style={styles.card}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 10,    
    shadowColor: THEME.GREY_COLOR,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 5,
    backgroundColor: '#fff'
  }
})

export default Card;