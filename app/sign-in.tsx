import { router, Link } from "expo-router";
import { Text, TextInput, View, Pressable, Image, Dimensions } from "react-native";
import { useState } from "react";
import { useSession } from "@/context";


export default function SignIn() {

  const [email, setEmail] = useState("");
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
    router.replace("./(app)/(drawer)/(tabs)/");
  }; 

  const { width, height } = Dimensions.get('window');

  return (
    <View className="flex-1 justify-center items-center p-4 bg-white">
    <Image source={require('../assets/images/wave.jpg')}
             style={{
              position: 'absolute',
              top: 0,
              right: 0, 
              width: width, 
              height: height, 
              opacity: 0.2,
            }} />
    <Image source={require('../assets/images/pngwing.com.png')}
             style={{
              position: 'absolute',
              top: 180,
              right: 20, 
              width: 80, 
              height: 120, 
              opacity: 1,
            }} />
    <View className="mb-10 ml-[-60px]">
      <Text className="text-2xl font-bold text-gray-800">Welcome To</Text>
      <Text className="text-8xl font-bold text-gray-800">Beacon</Text>
      <Text className="text-sm text-gray-500 ml-1">Please sign in to continue</Text>
    </View>

    <View className="w-full max-w-[300px] space-y-4 mb-8">
      <View>
        <Text className="text-sm font-medium text-gray-700 mb-1 ml-1">
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full p-3 border border-gray-300 rounded-lg bg-white"
        />
      </View>

      <View>
        <Text className="text-sm font-medium text-gray-700 mb-1 ml-1">
          Password
        </Text>
        <TextInput
          placeholder="Your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="password"
          className="w-full p-3 border border-gray-300 rounded-lg bg-white"
        />
      </View>
    </View>

    
    <Pressable
      onPress={handleSignInPress}
      className="bg-blue-600 w-full max-w-[300px] py-3 rounded-lg active:bg-blue-700"
    >
      <Text className="text-white font-semibold text-center">
        Sign In
      </Text>
    </Pressable>

    <View className="flex-row items-center mt-6">
      <Text className="text-gray-600">Don't have an account?</Text>
      <Link href="/sign-up" asChild>
        <Pressable className="ml-2">
          <Text className="text-blue-600 font-semibold">Sign Up</Text>
        </Pressable>
      </Link>
    </View>
    
  </View>
  );
}