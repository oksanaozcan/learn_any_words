import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet} from "react-native";
import Card from "../components/Card";
import CommonText from "../components/CommonText";
import { Divider } from 'react-native-elements';

const ReadMeScreen = ({navigation}) => {
  
  return(
    <SafeAreaView>
    <ScrollView>
    <View style={styles.center}>
      <Card>
        <CommonText commonStyle={styles.commonStyle}>This application works in offline mode, uses device memory for data storage.</CommonText>
        <Divider orientation="horizontal" />
        <CommonText commonStyle={styles.commonStyle}>You yourself fill in your database, enter only the data that is necessary.</CommonText>
        <Divider orientation="horizontal" />
        <CommonText commonStyle={styles.commonStyle}>You can edit, delete data partially or completely, control the vocabulary replenishment process, dividing your data into categories.</CommonText>
        <Divider orientation="horizontal" />
        <CommonText commonStyle={styles.commonStyle}>You have the necessary capabilities to view statistics and infographics of your progress.</CommonText>
      </Card>      
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 20
  }, 
  commonStyle: {
    paddingBottom: 10
  }
})


export default ReadMeScreen;