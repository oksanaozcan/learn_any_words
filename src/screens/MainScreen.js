import React, {useEffect, useLayoutEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWords } from "../store/actions/wordAction";
import { View, StyleSheet, FlatList } from "react-native";
import TitleText from "../components/TitleText";
import { THEME } from "../theme";
import MyButton from "../components/MyButton";
import { Ionicons } from '@expo/vector-icons';
// import Card from "../components/Card";
import { ListItem, Text, Card } from 'react-native-elements'
import { Divider } from "react-native-elements/dist/Divider";

const MainScreen = ({navigation}) => { 
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadWords())
  }, [dispatch, allCategories])

  const allCategories = useSelector(state => state.word.categories)
  const wordsLength = useSelector(state => state.word.allWords).length  
  const categLength = allCategories.length  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headericonContainer}>                    
          <Ionicons name="albums" size={25} color={THEME.GREEN_COLOR} onPress={() => navigation.navigate('AllWords')}/>
          <Ionicons name="heart" size={25} color={THEME.PINK_COLOR} onPress={() => navigation.navigate('Favorite')}/>
          <Ionicons name="school" size={25} color={THEME.MAIN_COLOR} onPress={() => navigation.navigate('Learned')}/>
          <Ionicons name="information-circle-outline" size={25} color={THEME.GREY_COLOR} onPress={() => navigation.navigate('ReadMe')}/>
        </View>            
      ),   
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => navigation.navigate('Category', {openCategory: item})}>   
      <ListItem.Title>{item}</ListItem.Title>  
      <ListItem.Content>        
        <ListItem.Subtitle>{item}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )
  
  if(wordsLength == 0) {    
    return (
      <View>
        <TitleText>You dont have words anymore</TitleText>
        <MyButton title="Add Word" onPress={() => navigation.navigate('AddWord')} color={THEME.GREEN_COLOR}/>
      </View>    
    )
  } 

  return(   
    <View style={styles.container} >
      <Card containerStyle={{ marginBottom: 10 }}>
        <Card.Title style={{ color: THEME.PINK_COLOR }}>{wordsLength} <Text>words in your dictionary</Text></Card.Title>        
        <Card.Divider/> 
        <Card.Title>Your Categories: <Text>[{categLength}]</Text></Card.Title> 
        
      </Card>            
      <FlatList contentContainerStyle={{ paddingBottom: 145 }} data={allCategories} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>                 
    </View>    
  )
}

const styles = StyleSheet.create({   
  headericonContainer: {
    flexDirection: 'row',
    width: 160,
    justifyContent: 'space-between'
  }  
})

export default MainScreen;
