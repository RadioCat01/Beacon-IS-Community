//bottom navigation bar

import { Tabs } from "expo-router";
import React from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { TabBarIcon } from "@/components/navigation/TabBarIcon"; // Assuming this is your custom icon component

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<DrawerNavigationProp<any>>();

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
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explorer"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "map" : "map-outline"} color={color} />
          ),
        }}
      />
     <Tabs.Screen
  name="disasterSubmit"
  options={{
    title: "Inform",
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon
        name={focused ? "alert-circle" : "alert-circle-outline"}
        color={color}
      />
    ),
  }}
/>

      <Tabs.Screen
        name="info"
        options={{
          title: "Info",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "information-circle" : "information-circle-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
