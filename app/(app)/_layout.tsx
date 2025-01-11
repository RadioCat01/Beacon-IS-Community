//import { Slot } from "expo-router";
import { useSession } from "@/context";
//import { Redirect } from 'expo-router';
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";


export default function AppLayout() {
  const { user, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return (<View style={styles.container}>
        <Text>Signed In</Text>
    </View>);
  }

  return (<View style={styles.container}>
            <Text>Signed In</Text>
        </View>);
}

const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
      }
    });