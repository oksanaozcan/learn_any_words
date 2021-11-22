import React, {useState} from "react";
import { View, StyleSheet, ScrollView, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useDispatch } from "react-redux";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import { THEME } from "../theme";
import { editWord } from "../store/actions/wordAction";

const EditWordScreen = ({route, navigation}) => {
  const {myWord} = route.params
  const {id, word, translate, synonims, category, example, tr_example, favorite, learned, date} = myWord
  const dispatch = useDispatch()

  const [newWord, setNewWord] = useState(word) 
  const [newTranslate, setNewTranslate] = useState(translate)
  const [newSynonims, setNewSynonims] = useState(synonims)
  const [newCategory, setNewCategory] = useState(category)
  const [newExample, setNewExample] = useState(example)
  const [newTranslateEx, setNewTranslateEx] = useState(tr_example)

  const clearEditWordForm = () => {
    setNewWord(word)    
    setNewTranslate(translate)
    setNewSynonims(synonims)
    setNewCategory(category)
    setNewExample(example)
    setNewTranslateEx(tr_example)
  }

  const editWordHandler = () => {
    const editedWord = {
      id: id,
      word: newWord,      
      translate: newTranslate,
      synonims: newSynonims,
      category: newCategory,
      example: newExample,
      tr_example: newTranslateEx,
      favorite: favorite,
      learned: learned,
      date: date
    }
    if (editedWord.word.trim() === '') {      
      return(
        Alert.alert(
          "Fields word necessarily",
          "this field cannot be equal to an empty string. Enter value please.",
          [
            { text: "OK", onPress: () => setNewWord(word) }
          ]
        )
      )
    }
    dispatch(editWord(editedWord))    
    navigation.navigate("AllWords")
  }
  return(    
    <SafeAreaView>
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>   
      <View>    
      <View style={styles.container}>
      <TitleText titleStyle={styles.titleStyle}>Edit Word </TitleText>
      </View>
    <View style={styles.wrap}>                   
      <Card>
        <SubText>word*:</SubText>    
        <TextInput style={styles.textinput} 
          placeholder="Enter New Word" 
          value={newWord} 
          onChangeText={setNewWord}
        />            
        <SubText >translate:</SubText>    
        <TextInput style={styles.textinput} 
          placeholder="Enter translate"
          value={newTranslate}
          onChangeText={setNewTranslate}
          multiline
        />                 
      </Card>        
      <Card>
        <SubText>synonims:</SubText>          
        <TextInput style={styles.textinput} 
          placeholder="Enter synonims"
          value={newSynonims}
          onChangeText={setNewSynonims}
          multiline
        />              
        <SubText >category:</SubText>         
        <TextInput style={styles.textinput} 
          placeholder="Enter category"
          value={newCategory}
          onChangeText={setNewCategory}
        />               
      </Card>      
      <Card>
        <SubText>example:</SubText>          
        <TextInput style={styles.textinput} 
          placeholder="Enter example"
          value={newExample}
          onChangeText={setNewExample} 
          multiline
        />         
        <SubText >translate example:</SubText>
        <TextInput style={styles.textinput} 
          placeholder="Enter translate example"
          value={newTranslateEx}
          onChangeText={setNewTranslateEx} 
          multiline
        />                
      </Card>        
    </View>
    <View style={styles.btnContainer}>
      <MyButton title="cansel" onPress={clearEditWordForm} color={THEME.GREY_COLOR}/>
      <MyButton title="edit" onPress={editWordHandler} color={THEME.GREEN_COLOR}/>
    </View>    
    </View>
    </TouchableWithoutFeedback>
    </ScrollView>    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  wrap: {
    padding: 20,
    alignItems: 'center'    
  },
  titleStyle: {
    textAlign: 'center'
  },
  img: {
    width: '50%',
    height: 90
  },   
  imgIconsWrap: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-end',    
    justifyContent: 'space-between'
  },
  iconsContainer: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-between'
  },  
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15
  },
  headericonContainer: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'space-between'
  },
  textinput: {
    padding: 10,
    paddingLeft: 30,   
  }
 
})

export default EditWordScreen;
