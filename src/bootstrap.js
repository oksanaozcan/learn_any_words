import * as Font from 'expo-font';

export async function bootstrap() {
  try {
    await Font.loadAsync({
      OpenBold: require('../assets/fonts/OpenSans-Bold.ttf'),
      OpenReg: require('../assets/fonts/OpenSans-Regular.ttf')
    })

  } catch(e) {
    console.log(e)
  }  
}