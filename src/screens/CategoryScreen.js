import React, {useEffect, useLayoutEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, SafeAreaView, FlatList, Alert, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../theme";
import WordItem from "../components/WordItem";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";
import { removeWord, loadWords } from "../store/actions/wordAction";

const CategoryScreen = ({route, navigation}) => {
  const dispatch = useDispatch()
  const {openCategory} = route.params;
  const myCategory = useSelector(state => state.word.allWords.filter(item => item.category === openCategory))

  useEffect(() => {
    dispatch(loadWords())
  }, [myCategory, dispatch])  

  const lengthCategory = myCategory.length
  
  const renderItem = ({ item }) => (
    <WordItem item={item} 
      openWord={() => navigation.navigate('Word', 
      {
        wordId: item.id,
        word: item.word     
      })}
    />
  );

  if (myCategory.length == 0) {
    navigation.navigate('Main')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headericonContainer}>                    
          <Ionicons name="trash-outline" size={25} color={THEME.PINK_COLOR} onPress={removeAllCategoryWords}/>
        </View>            
      ),   
    });
  }, [navigation]);

  const removeAllCategoryWords = () => 
  Alert.alert(
    `Remove words ${openCategory}`,
    "Do you really want to remove all thees words? This action cannot be undone!",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Delete", onPress: () => {
        myCategory.map(obj => {
          dispatch(removeWord(obj.id))
        })                      
      }}          
    ]
  );

  return(
    <SafeAreaView style={styles.container}>
      <TitleText titleStyle={styles.titleStyle}>Category {openCategory} <SubText> [{lengthCategory}]</SubText></TitleText>
      <FlatList
        data={myCategory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'center'
  },  
  headericonContainer: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'space-between'
  }  
})

export default CategoryScreen;