//import { Redirect, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";


export default function Index() {
  return (
      <View style={styles.container}>
          <Text>Signed In</Text>
      </View>
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
