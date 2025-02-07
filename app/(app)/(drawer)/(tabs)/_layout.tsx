import { router, Tabs } from "expo-router";
import React from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useSession } from "@/context";
import { setUserOfflineStatus } from "@/lib/firebase-config";


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const { signOut, user } = useSession();

  const backgroundImage = require("../../../../assets/images/wave.jpg"); 

  const handleLogout = async () => {
      if (user?.uid) {
        await setUserOfflineStatus(user.uid);
      }
      await signOut();
      router.replace("/sign-in");
    };

    const displayName = user?.displayName || user?.email?.split('@')[0] || 'Guest';


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.openDrawer()}
            style={{ marginLeft: 16 }}
          >
            <Ionicons name="menu" size={24} color="black" />
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={focused ? "#2563EB" : color} 
                size={focused ? 28 : 28} 
                style={{ fontWeight: "bold" }} 
              />
          ),
          headerRight: () => (
            <Pressable onPress={handleLogout} style={{ marginRight: 16 }}>
              <Ionicons name="log-out-outline" size={30} color="black" />
            </Pressable>
          ),
          headerTitle:()=>(
            <View className="flex-row justify-center items-center pt-2 pb-2">
            <Text className="text-xl font-light text-gray-800 ">Welcome back </Text>
            <Text className="text-xl font-light text-blue-600">{displayName}</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerLeft: () => null,
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "globe" : "globe-outline"}
              color={focused ? "#2563EB" : color} 
              size={focused ? 30 : 30} 
              style={{ fontWeight: "bold" }} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          headerLeft: () => null,
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "help-circle" : "help-circle-outline"}
              color={focused ? "#2563EB" : color} 
              size={focused ? 30 : 30} 
              style={{ fontWeight: "bold" }} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
