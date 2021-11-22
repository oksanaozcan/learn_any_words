import React, {useState} from "react";
import { View, StyleSheet, ScrollView, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useDispatch } from "react-redux";
import SubText from "../components/SubText";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import { THEME } from "../theme";
import { addWord } from "../store/actions/wordAction";

const AddWordScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [newWord, setNewWord] = useState('') 
  const [newTranslate, setNewTranslate] = useState('')
  const [synonims, setSynonims] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [newExample, setNewExample] = useState('')
  const [newTranslateEx, setNewTranslateEx] = useState('')

  const clearAddWordForm = () => {
    setNewWord('')    
    setNewTranslate('')
    setSynonims('')
    setNewCategory('')
    setNewExample('')
    setNewTranslateEx('')
  }

  const saveWordHandler = () => {
    const myWord = {
      word: newWord,      
      translate: newTranslate,
      synonims: synonims,
      category: newCategory,
      example: newExample,
      tr_example: newTranslateEx,
      favorite: false,
      learned: false,
      date: new Date().toJSON()
    }
    if (myWord.word.trim() === '') {      
      return(
        Alert.alert(
          "Fields word necessarily",
          "This field cannot be equal to an empty string. Enter value please.",
          [
            { text: "OK", onPress: () => setNewWord('') }
          ]
        )
      )
    }
    dispatch(addWord(myWord))
    setNewWord('')    
    setNewTranslate('')
    setSynonims('')
    setNewCategory('')
    setNewExample('')
    setNewTranslateEx('')
    navigation.navigate("AllWords")
  }
  return(    
    <SafeAreaView>
    <ScrollView>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>      
    <View>      
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
          value={synonims}
          onChangeText={setSynonims}
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
      <MyButton title="clear" onPress={clearAddWordForm} color={THEME.GREY_COLOR}/>
      <MyButton title="add word" onPress={saveWordHandler} color={THEME.GREEN_COLOR}/>
    </View>    
    </View>
    </TouchableWithoutFeedback>
    </ScrollView>    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({  
  wrap: {
    padding: 20,
    alignItems: 'center'    
  },  
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15
  }, 
  textinput: {
    padding: 10,
    paddingLeft: 30,   
  } 
})

export default AddWordScreen;
