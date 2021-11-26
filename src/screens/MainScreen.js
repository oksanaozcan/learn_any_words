import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWords } from "../store/actions/wordAction";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SubText from "../components/SubText";
import TitleText from "../components/TitleText";
import { THEME } from "../theme";
import MyButton from "../components/MyButton";
import Card from "../components/Card";
import { ListItem } from 'react-native-elements'

const MainScreen = ({navigation}) => { 

  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => navigation.navigate('Category', {openCategory: item})}>   
      <ListItem.Title>{item}</ListItem.Title>  
      <ListItem.Content>        
        <ListItem.Subtitle>{item}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadWords())
  }, [dispatch, allCategories])

  const allCategories = useSelector(state => state.word.categories)
  const wordsLength = useSelector(state => state.word.allWords).length  
  const categLength = allCategories.length  

  if(wordsLength == 0) {    
    return (
      <View style={styles.nullLength}>
        <TitleText titleStyle={styles.titleStyle}>You dont have words anymore</TitleText>
        <MyButton title="Add Word" onPress={() => navigation.navigate('AddWord')} color={THEME.GREEN_COLOR}/>
      </View>    
    )
  } 

  return(   
    <View style={styles.container} >
      <Card>
        <SubText>There are words in your dictionary: <Text style={styles.lengthText}> - {wordsLength} - </Text></SubText>        
      </Card>      
      <View style={styles.btnContainer}>
        <MyButton title="All" onPress={() => navigation.navigate('AllWords')} color={THEME.GREEN_COLOR}/>
        <MyButton title="Favorite" onPress={() => navigation.navigate('Favorite')} color={THEME.PINK_COLOR}/>
        <MyButton title="Learned" onPress={() => navigation.navigate('Learned')} color={THEME.GREY_COLOR}/>
      </View>      
      <TitleText titleStyle={styles.titleStyle}>Your Categories: <Text style={{ color: THEME.GREY_COLOR }}>[{categLength}]</Text></TitleText>
      <FlatList data={allCategories} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>          
    </View>    
  )
}

const styles = StyleSheet.create({  
  container: {
    width: '93%'
  },
  // btnContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   padding: 15
  // },
  titleStyle: {
    textAlign: 'center'
  },
  lengthText: {
    color: THEME.PINK_COLOR, 
    fontSize: 20,
    paddingLeft: 30
  },
  nullLength: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30    
  },
  titleStyle: {
    textAlign: 'center',
    paddingBottom: 20
  }  
})

export default MainScreen;
