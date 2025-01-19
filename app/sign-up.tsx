import { router, Link } from "expo-router";
import { Text, TextInput, View, Pressable, Image, Dimensions } from "react-native";
import { useState } from "react";
import { useSession } from "@/context";
import { writeUserData } from "@/lib/firebase-config";

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useSession();

  const handleRegister = async () => {
    try {
      const response = await signUp(email, password, name);
      if(response){
        const uid = response.uid!;
        const email = response.email!;
        const name= response.displayName!;
        await writeUserData(uid, name, email);
        router.replace("./(app)/(drawer)/(tabs)/");
      }
    } catch (err) {
      console.log("[handleRegister] ==>", err);
      return null;
    }
  };

  const handleSignUpPress = async () => {
    const resp = await handleRegister();
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
      <View className="items-center mb-16 mt-[-28px] ml-[-0px]">
        <Text className="text-5xl font-bold text-gray-800 mb-2 ml-[-4px]">
          Create Account
        </Text>
        <Text className="text-sm text-gray-500">
          Sign up to get started
        </Text>
      </View>


      
      <View className="w-full max-w-[300px] space-y-4 mb-8">
        <View>
          <Text className="text-sm font-medium text-gray-700 mb-1 ml-1">
            Name
          </Text>
          <TextInput
            placeholder="Your full name"
            value={name}
            onChangeText={setName}
            textContentType="name"
            autoCapitalize="words"
            className="w-full p-3 border border-gray-300 rounded-lg text-base bg-white"
          />
        </View>

        <View>
          <Text className="text-sm font-medium text-gray-700 mb-1 ml-1">
            Email
          </Text>
          <TextInput
            placeholder="name@mail.com"
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
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType="newPassword"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white"
          />
        </View>
      </View>

      
      <Pressable
        onPress={handleSignUpPress}
        className="bg-blue-600 w-full max-w-[300px] py-3 rounded-lg active:bg-blue-700"
      >
        <Text className="text-white font-semibold text-center">
          Sign Up
        </Text>
      </Pressable>

     
      <View className="flex-row items-center mt-6">
        <Text className="text-gray-600">Already have an account?</Text>
        <Link href="/sign-in" asChild>
          <Pressable className="ml-2">
            <Text className="text-blue-600 font-semibold">Sign In</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
