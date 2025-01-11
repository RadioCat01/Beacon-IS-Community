
import { useSession } from "@/context";
import { Redirect, Slot } from "expo-router";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";


export default function AppLayout() {
  const { user, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}

const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
      }
    });