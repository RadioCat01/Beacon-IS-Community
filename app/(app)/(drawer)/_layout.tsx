import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Profile",
            title: "Profile",
          }}
        />
        <Drawer.Screen
          name="AllComplaints"
          options={{
            drawerLabel: "AllComplaints",
            title: "AllComplaints",
          }}
        />
        <Drawer.Screen
          name="NewComplaint"
          options={{
            drawerLabel: "NewComplaint",
            title: "NewComplaint",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
