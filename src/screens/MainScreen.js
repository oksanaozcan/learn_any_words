import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWords } from "../store/actions/wordAction";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import SubText from "../components/SubText";
import TitleText from "../components/TitleText";
import { THEME } from "../theme";
import CategoryItem from "../components/CategoryItem";
import MyButton from "../components/MyButton";
import Card from "../components/Card";

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
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadWords())
  }, [])

  const allCategories = useSelector(state => state.word.categories)
  const wordsLength = useSelector(state => state.word.allWords).length

  return(
    <SafeAreaView>
    <View >
      <Card>
        <SubText>There are words in your dictionary: <Text style={styles.lengthText}> - {wordsLength} - </Text></SubText>        
      </Card>      
      <View style={styles.btnContainer}>
        <MyButton title="All" onPress={() => navigation.navigate('AllWords')} color={THEME.GREEN_COLOR}/>
        <MyButton title="Favorite" onPress={() => navigation.navigate('Favorite')} color={THEME.PINK_COLOR}/>
        <MyButton title="Learned" onPress={() => navigation.navigate('Learned')} color={THEME.GREY_COLOR}/>
      </View>      
      <TitleText titleStyle={styles.titleStyle}>Your Categories: </TitleText>
      <FlatList data={allCategories} renderItem={renderItem}/>          
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
  },
  lengthText: {
    color: THEME.PINK_COLOR, 
    fontSize: 30,
    paddingLeft: 30
  }
})

export default MainScreen;
