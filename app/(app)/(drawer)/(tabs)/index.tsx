import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import rain from "./rain.json";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useSession } from "@/context";
import { getOnlineUsers, setUserOfflineStatus } from "@/lib/firebase-config";
import { router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import { getDatabase, ref, get } from "firebase/database";
import app from "../../../../lib/firebase-config";
import registerNNPushToken from 'native-notify';

export default function TabsIndexScreen(){
  const { height, width } = Dimensions.get('window');
  registerNNPushToken(27290, '09d5eIGhq6pUDJhOiDg32i');
  
  let [compArr, setCompArr] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const complaintsRef = ref(db, "complaints");
    const snapshot = await get(complaintsRef);
    if (snapshot.exists()) {
      setCompArr(Object.values(snapshot.val()));
    } else {
      Alert.alert("Error", "No complaints found");
    }
  };

  const getUserName = async (userId: string) => {
    const db = getDatabase(app);
    const userRef = ref(db, `users/${userId}`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val().username;
    } else {
      return "Unknown";
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rain,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };
  const disasterData = [
    {
      id: 1,
      title: "Flood Warning",
      description: "Heavy rains causing flooding in the area.",
      type: "Flood",
    },
    {
      id: 2,
      title: "Earthquake Alert",
      description: "Magnitude 6.5 earthquake detected near the coast.",
      type: "Earthquake",
    },
    {
      id: 3,
      title: "Tornado Warning",
      description: "Tornado spotted in the southern region. Stay safe.",
      type: "Tornado",
    },
    {
      id: 4,
      title: "Heatwave Warning",
      description: "High temperatures expected over the next 48 hours.",
      type: "Heatwave",
    },
    {
      id: 5,
      title: "Wildfire Update",
      description:
        "Wildfire spreading near the national park. Evacuations ongoing.",
      type: "Wildfire",
    },
    {
      id: 6,
      title: "Hurricane Advisory",
      description: "Category 3 hurricane approaching the coastline.",
      type: "Hurricane",
    },
    {
      id: 7,
      title: "Flood Level Report",
      description: "Flood levels rising in the river. Evacuate areas at risk.",
      type: "Flood",
    },
  ];

   const INITIAL_REGION = {
     latitude: 6.7147723324339195,
     longitude: 80.78727214003801,
     latitudeDelta: 0.2,
     longitudeDelta: 0.2,
   };

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
      const onlineUsersList = Object.values(users || {}).filter(
        (user: any) => user.isOnline
      );
      setOnlineUsers(onlineUsersList);
    });
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View className="flex-1 justify-between">
        <View className="justify-between p-6 flex-row items-center bg-gray-200 mb-4">
          <View>
            <Text className="text-6xl font-bold text-gray-800">Beacon</Text>
            <Text className="text-lg font-medium text-gray-700">
              Report and Stay Informed
            </Text>
          </View>
          <Image
            source={require("../../../../assets/images/pngwing.com.png")}
            style={{ width: 40, height: 80, top: -12 }}
          />
        </View>
         <View style={{ height: height * 0.5, width: width * 0.95, alignSelf: 'center', justifyContent: 'center' }}>
      <Text className="text-gray-800 text-2xl font-medium pl-2 mb-2 mt-2">Live Location</Text>
       <View style={styles.mapContainer}>
               <MapView style={styles.map} initialRegion={INITIAL_REGION} 
               showsUserLocation
               showsMyLocationButton
               provider={PROVIDER_DEFAULT}
               />
       </View>
    </View>

        <View className="mt-6 p-2 bg-slate-200 pl-4">
          <Text className="text-gray-800 text-xl font-bold pl-2">Online</Text>
          <FlatList
            data={onlineUsers}
            keyExtractor={(item) => item.id}
            horizontal
            style={{ maxHeight: 150 }}
            renderItem={({ item }) => (
              <View className="items-center mr-2 bg-slate-300 rounded-xl w-24 p-4 mt-2 mb-2">
                <View className="w-12 h-12 bg-gray-400 rounded-full justify-center items-center mb-2">
                  <Text className="text-2xl font-bold text-white">
                    {item.username?.charAt(0) || "?"}
                  </Text>
                </View>
                <Text className="text-[14px] font-bold text-gray-800">
                  {item.username || "Unknown"}
                </Text>
              </View>
            )}
            ListEmptyComponent={
              <Text className="text-lg text-center text-gray-500">
                No users online
              </Text>
            }
          />
        </View>

        <View className="p-4 mt-2">
          <Text className="text-gray-800 text-xl font-bold mb-[-10px]">
            Real-time Disaster Alerts
          </Text>
          <ScrollView
            horizontal
            contentContainerStyle={{
              flexDirection: "row",
              paddingVertical: 16,
            }}
            nestedScrollEnabled={true}
          >
            {disasterData.map((disaster) => (
              <View
                key={disaster.id}
                className="p-4 mr-4 bg-gray-300 rounded-xl"
              >
                <Text className="text-xl font-bold text-blue-600 mb-2">
                  {disaster.title}
                </Text>
                <Text className="text-gray-800 mb-2">
                  {disaster.description}
                </Text>
                <View>
                  <Pressable className="w-28 p-2 bg-blue-600 rounded-lg active:bg-blue-500 items-center justify-center">
                    <Text className="text-lg font-bold text-gray-300">
                      {disaster.type}
                    </Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="p-4 mt-2">
          <Text className="text-gray-800 text-xl font-bold mb-[-10px]">
            Complaints
          </Text>
          <ScrollView
            horizontal
            contentContainerStyle={{
              flexDirection: "row",
              paddingVertical: 16,
            }}
            nestedScrollEnabled={true}
          >
            {compArr.map((item, index) => (
              <View key={index} className="p-4 mr-4 bg-gray-300 rounded-xl">
                <Text className="text-xl font-bold text-red-600 mb-2">
                  {item.type}
                </Text>
                <Text className="text-gray-800 mb-2">
                  Contact : {item.contact}
                </Text>
                <Text className="text-gray-800 mb-2">
                  username : {item.username}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.heroSection} className="w-96 ml-6">
        <Text style={styles.title}>Report Disasters & Help Save Lives</Text>
        <Text style={styles.subtitle}>
          Your reports help emergency teams respond faster and save communities.
        </Text>
        <Text style={styles.emergencyContact}>
          Emergency Hotline: +94 112 456 789
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 8,
    borderColor: "#d1d5db",
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  heroSection: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#7f8c8d",
    lineHeight: 24,
  },
  emergencyContact: {
    fontSize: 18,
    textAlign: "center",
    color: "#e74c3c",
    marginTop: 15,
    fontWeight: "600",
  },
});
