import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList } from "react-native";
import TitleText from "../components/TitleText";
import { THEME } from "../theme";
import { DATA } from "../data";
import CategoryItem from "../components/CategoryItem";
import MyButton from "../components/MyButton";

const lng = DATA.length;

const allCategories = [];
DATA.forEach(obj => {
  allCategories.push(obj.category);   
});
const uniqueCat = [...new Set(allCategories)];

const MainScreen = ({navigation}) => { 
  const renderItem = ({item}) => {
    return(
      <CategoryItem item={item} 
      openCategory={() => navigation.navigate('Category', 
      {
        openCategory: item        
      })}
      />
    )
  }
  return(
    <SafeAreaView>
    <View >
      <TitleText titleStyle={styles.titleStyle}>There are <Text style={{ color: THEME.PINK_COLOR, fontSize: 30 }}> {lng} </Text> words in your dictionary</TitleText>
      <View style={styles.btnContainer}>
        <MyButton title="All" onPress={() => navigation.navigate('AllWords')} color={THEME.GREEN_COLOR}/>
        <MyButton title="Favorite" onPress={() => navigation.navigate('Category')} color={THEME.PINK_COLOR}/>
        <MyButton title="Learned" onPress={() => navigation.navigate('Category')} color={THEME.GREY_COLOR}/>
      </View>      
      <TitleText titleStyle={styles.titleStyle}>Your Categories: </TitleText>
      <FlatList data={uniqueCat} renderItem={renderItem}/>          
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  titleStyle: {
    textAlign: 'center'
  }
})

export default MainScreen;
