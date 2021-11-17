import React from "react";
import { View, Button, StyleSheet } from "react-native";

const MyButton = ({title, onPress, color}) => {
  return (
    <View style={styles.btnWrapper}>
      <Button style={styles.btn} title={title} onPress={onPress} color={color}/>
    </View>
  )
}

const styles = StyleSheet.create({
  btnWrapper: {
    width: 100,
    height: 50,
  } 
})

export default MyButton;