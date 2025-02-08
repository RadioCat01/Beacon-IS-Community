import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useSession } from "@/context";
import { getOnlineUsers, setUserOfflineStatus } from "@/lib/firebase-config";
import { router } from "expo-router";

const Aboutpage = () => {
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

  return (
    <View style={styles.container}>
     
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
      </View>

     
      <View style={styles.usersSection}>
        <Text style={styles.heading}>Online Users</Text>
        {onlineUsers.length > 0 ? (
          <FlatList
            data={onlineUsers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.userItem}>
                <Text style={styles.userNameList}>{item.username || "Unknown"}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noUsersText}>No users are currently online.</Text>
        )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  welcomeSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: "#555",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  usersSection: {
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 10,
  },
  userItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  userNameList: {
    fontSize: 16,
    color: "#333",
  },
  noUsersText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Aboutpage;
