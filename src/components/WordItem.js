import React from "react";
import { ListItem } from 'react-native-elements'

const WordItem = ({ item, openWord}) => {  
  return (
    <ListItem bottomDivider onPress={openWord}>
      <ListItem.Title>{item.word}</ListItem.Title>  
      <ListItem.Content>        
        <ListItem.Subtitle>[{item.category}]</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
} 

export default WordItem;