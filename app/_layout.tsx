import { SessionProvider } from '@/context';
//import { Slot } from 'expo-router';
import {StyleSheet, View, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  
  return (
   <SessionProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
                <Text>This is signup page</Text>
            </View>
      </GestureHandlerRootView>
   </SessionProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }
});
