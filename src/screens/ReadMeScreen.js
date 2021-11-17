import React from "react";
import { SafeAreaView, ScrollView, View} from "react-native";
import CommonText from "../components/CommonText";
import TitleText from "../components/TitleText";

const ReadMeScreen = () => {
  return(
    <SafeAreaView>
    <ScrollView>
    <View>
      <CommonText>Здесь в будузем будет небольшая инфа и приложении и инструкция к нему. А сейчас буду сюда вписывать задачи и проблемы которые нужно будет не забыть решить</CommonText>
      <View>
        <TitleText>Problems: </TitleText>
        <CommonText>navigation icon btn edit and trash</CommonText>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default ReadMeScreen;