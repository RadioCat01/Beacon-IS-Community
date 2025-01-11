import React from "react";
import { View, Text, Pressable } from "react-native";
import { useSession } from "@/context";
import { router } from "expo-router";

const TabsIndexScreen = () => {

  const { signOut, user } = useSession();
  const handleLogout = async () => {
    await signOut();
    router.replace("/sign-in");
  };

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Guest';

  return (
    <View className="flex-1 justify-center items-center p-4">
      <View className="items-center mb-8">
        <Text className="text-xl font-bold text-gray-800 mb-2">
          Welcome back,
        </Text>
        <Text className="text-2xl font-bold text-blue-600">
          {displayName}
        </Text>
        <Text className="text-sm text-gray-500 mt-2">
          {user?.email}
        </Text>
      </View>
  
      <Pressable
        onPress={handleLogout}
        className="bg-red-500 px-6 py-3 rounded-lg active:bg-red-600"
      >
        <Text className="text-white font-semibold text-base">Logout</Text>
      </Pressable>
    </View>
  );
};

export default TabsIndexScreen;
