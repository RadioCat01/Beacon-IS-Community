import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSession } from "@/context";
import { getOnlineUsers } from "@/lib/firebase-config";

const Aboutpage = () => {
  const { user } = useSession(); // Get the current user session
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);

  // Fetch online users when the component mounts
  useEffect(() => {
    getOnlineUsers((users: any) => {
      const onlineUsersList = Object.values(users || {})
        .filter((user: any) => user.isOnline) // Filter only online users
        .sort((a: any, b: any) => a.username.localeCompare(b.username)); // Sort alphabetically by username
      setOnlineUsers(onlineUsersList);
    });
  }, []);

  // Extract the display name from the user's email or default to "Guest"
  const displayName = user?.displayName || user?.email?.split("@")[0] || "Guest";

  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>{displayName}</Text>
      </View>

      {/* Online Users Section */}
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
    </View>
  );
};

// Styles
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
