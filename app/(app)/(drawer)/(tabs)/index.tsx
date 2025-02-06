import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useSession } from "@/context";
import { router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import { getOnlineUsers, setUserOfflineStatus } from "@/lib/firebase-config";

const TabsIndexScreen = () => {

  const { signOut, user } = useSession();
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);

  const handleLogout = async () => {
    if (user?.uid) {
      await setUserOfflineStatus(user.uid);
    }
    await signOut();
    router.replace("/sign-in");
  };

  useEffect(() => {
    getOnlineUsers((users: any) => {
      const onlineUsersList = Object.values(users || {}).filter((user: any) => user.isOnline);
      setOnlineUsers(onlineUsersList);
    });
  }, []);

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Guest';

  return (
    <View className="flex-1 justify-center items-center p-4">
       <View className="mt-6 w-full">
           <Text className="text-[18px] font-bold text-blue-900 mb-4 w-full">Online Users</Text>
            <FlatList
                   data={onlineUsers}
                  keyExtractor={(item) => item.id}
                     horizontal 
                  style={{ maxHeight: 150 }} 
                    renderItem={({ item }) => (
           <View className="items-center p-4 mb-4 mr-[-20px]">
        
            <View className="w-16 h-16 bg-gray-300 rounded-full justify-center items-center mb-2">
          
          <Text className="text-4xl font-bold text-white">{item.username?.charAt(0) || "?"}</Text>
            </View>
        
           <Text className="text-[16px] font-bold text-gray-800">{item.username || "Unknown"}</Text>
            <Text className="text-[12px] text-gray-600">{item.email}</Text>
             </View>
                  )}
            ListEmptyComponent={<Text className="text-lg text-center text-gray-500">No users online</Text>}
                 />
      </View>
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
