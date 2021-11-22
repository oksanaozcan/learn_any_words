import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { THEME } from "../theme";

const FooterBtnGroup = ({addToLearnedHandler, learnWordHandler}) => {
  return (
    <View style={styles.footerBtnContainer}>
      <View style={styles.btn}>
        <Button title="Add to learned" color={THEME.GREY_COLOR} onPress={addToLearnedHandler}/>
      </View>
      <View style={styles.btn}>
        <Button title="learn it" color={THEME.GREEN_COLOR} onPress={learnWordHandler}/>
      </View>         
    </View>
  )
}

const styles = StyleSheet.create({  
  footerBtnContainer: {
    paddingVertical: 25,
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btn: {
    width: '48%'
  },
 
})

export default FooterBtnGroup;