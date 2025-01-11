import { router, Link } from "expo-router";
import { Text, TextInput, View, Pressable } from "react-native";
import { useState } from "react";
import { useSession } from "@/context";
import { StyleSheet } from "react-native";

export default function SignIn() {

  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSession();

  const handleLogin = async () => {
    try {
      return await signIn(email, password);
    } catch (err) {
      console.log("[handleLogin] ==>", err);
      return null;
    }
  };

  const handleSignInPress = async () => {
    const resp = await handleLogin();
    router.replace("/(app)/(drawer)/(tabs)/");
  }; */

  return (
    <View className="flex-1 bg-white items-center justify-center">
        <Text className="color-blue-500">This is signup page!</Text>
    </View>
  );
}