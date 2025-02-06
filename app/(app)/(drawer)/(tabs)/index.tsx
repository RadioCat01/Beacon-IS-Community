
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
=======
// import React, { useEffect, useState } from "react";
// import { View, Text, Pressable } from "react-native";
// import { useSession } from "@/context";
// import { router } from "expo-router";
// import { FlatList } from "react-native-gesture-handler";
// import { getOnlineUsers, setUserOfflineStatus } from "@/lib/firebase-config";

// const TabsIndexScreen = () => {

//   const { signOut, user } = useSession();
//   const [onlineUsers, setOnlineUsers] = useState<any[]>([]);

//   const handleLogout = async () => {
//     if (user?.uid) {
//       await setUserOfflineStatus(user.uid);
//     }
//     await signOut();
//     router.replace("/sign-in");
//   };

//   useEffect(() => {
//     getOnlineUsers((users: any) => {
//       const onlineUsersList = Object.values(users || {}).filter((user: any) => user.isOnline);
//       setOnlineUsers(onlineUsersList);
//     });
//   }, []);

//   const displayName = user?.displayName || user?.email?.split('@')[0] || 'Guest';

//   return (
//     <View className="flex-1 justify-center items-center p-4">
//        <View className="mt-6 w-full">
//            <Text className="text-[18px] font-bold text-blue-900 mb-4 w-full">Online Users</Text>
//             <FlatList
//                    data={onlineUsers}
//                   keyExtractor={(item) => item.id}
//                      horizontal 
//                   style={{ maxHeight: 150 }} 
//                     renderItem={({ item }) => (
//            <View className="items-center p-4 mb-4 mr-[-20px]">
        
//             <View className="w-16 h-16 bg-gray-300 rounded-full justify-center items-center mb-2">
          
//           <Text className="text-4xl font-bold text-white">{item.username?.charAt(0) || "?"}</Text>
//             </View>
        
//            <Text className="text-[16px] font-bold text-gray-800">{item.username || "Unknown"}</Text>
//             <Text className="text-[12px] text-gray-600">{item.email}</Text>
//              </View>
//                   )}
//             ListEmptyComponent={<Text className="text-lg text-center text-gray-500">No users online</Text>}
//                  />
//       </View>
//       <View className="items-center mb-8">
//         <Text className="text-xl font-bold text-gray-800 mb-2">
//           Welcome back,
//         </Text>
//         <Text className="text-2xl font-bold text-blue-600">
//           {displayName}
//         </Text>
//         <Text className="text-sm text-gray-500 mt-2">
//           {user?.email}
//         </Text>
//       </View>
  
//       <Pressable
//         onPress={handleLogout}
//         className="bg-red-500 px-6 py-3 rounded-lg active:bg-red-600"
//       >
//         <Text className="text-white font-semibold text-base">Logout</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default TabsIndexScreen;



// import React from "react";
// import Lottie from "lottie-react-native";
// import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// // Import the rain animation JSON file using a relative path
// import rain from "./rain.json"; // Adjusted path

// const TabsIndexScreen = () => {
//   // Lottie animation options
//   const defaultOptions = {
//     loop: true,
//     autoplay: true, // Enable autoplay
//     animationData: rain, // Import animation data
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid meet", // Change to 'meet' to preserve aspect ratio without zooming
//     },
//   };

//   // Dummy disaster data for cards
//   const disasterData = [
//     { id: 1, title: "Flood Warning", description: "Heavy rains causing flooding in the area.", type: "Flood" },
//     { id: 2, title: "Earthquake Alert", description: "Magnitude 6.5 earthquake detected near the coast.", type: "Earthquake" },
//     { id: 3, title: "Tornado Warning", description: "Tornado spotted in the southern region. Stay safe.", type: "Tornado" },
//     { id: 4, title: "Heatwave Warning", description: "High temperatures expected over the next 48 hours.", type: "Heatwave" },
//     { id: 5, title: "Wildfire Update", description: "Wildfire spreading near the national park. Evacuations ongoing.", type: "Wildfire" },
//     { id: 6, title: "Hurricane Advisory", description: "Category 3 hurricane approaching the coastline.", type: "Hurricane" },
//     { id: 7, title: "Flood Level Report", description: "Flood levels rising in the river. Evacuate areas at risk.", type: "Flood" },
//   ];

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
//       <View style={{ position: "relative", minHeight: "100%" }}>
//         {/* Top Section with animated rain background */}
//         <View style={{ position: "absolute", inset: 0 }}>
//           <Lottie 
//             loop={defaultOptions.loop} 
//             autoPlay={defaultOptions.autoplay} 
//             source={defaultOptions.animationData} 
//             style={{ height: "100%", width: "100%" }} 
//           />
//         </View>
//         {/* Hero Section */}
//         <View style={{ position: "relative", zIndex: 10, justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.3)", paddingHorizontal: 16 }}>
//             <Text style={{ fontSize: 40, fontWeight: "600", marginBottom: 24, color: "#fff", textAlign: "center" }}>Disaster Management Hub</Text>
//             <Text style={{ fontSize: 18, marginBottom: 24, color: "#fff", textAlign: "center" }}>
//             Stay informed and report disasters for better management.
//             </Text>
//           <TouchableOpacity 
//             style={{
//               paddingHorizontal: 32,
//               paddingVertical: 12,
//               backgroundColor: "#e74c3c",
//               borderRadius: 50,
//             }}
//             aria-label="Submit a disaster report"
//           >
//             <Text style={{ color: "#fff", fontSize: 18 }}>Stay Informed</Text>
//           </TouchableOpacity>
//         </View>
//         {/* Real-time Disaster Data Feed Section */}
//         <View style={{ zIndex: 10, marginTop: 10, paddingHorizontal: 16 }}>
//           <Text style={{ fontSize: 24, fontWeight: "600", color: "#fff", marginBottom: 16 }}>Real-time Disaster Alerts</Text>
//           {/* Horizontal Scrolling Container */}
//           <ScrollView horizontal contentContainerStyle={{ flexDirection: "row", paddingVertical: 16 }}>
//             {disasterData.map((disaster) => (
//               <View key={disaster.id} style={{ backgroundColor: "#2c3e50", borderRadius: 8, padding: 16, width: 256, marginRight: 16 }}>
//                 <Text style={{ fontSize: 18, fontWeight: "600", color: "#e74c3c" }}>{disaster.title}</Text>
//                 <Text style={{ fontSize: 14, color: "#bdc3c7", marginTop: 8 }}>{disaster.description}</Text>
//                 <View style={{ marginTop: 16, backgroundColor: "#e74c3c", paddingVertical: 4, paddingHorizontal: 12, borderRadius: 16 }}>
//                   <Text style={{ fontSize: 12, fontWeight: "600", color: "#fff" }}>
//                     {disaster.type}
//                   </Text>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default TabsIndexScreen;

import React from "react";
import Lottie from "lottie-react-native";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// Import the rain animation JSON file using a relative path
import rain from "./rain.json"; // Adjusted path

const TabsIndexScreen = () => {
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true, // Enable autoplay
    animationData: rain, // Import animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet", // Change to 'meet' to preserve aspect ratio without zooming
    },
  };

  // Dummy disaster data for cards
  const disasterData = [
    { id: 1, title: "Flood Warning", description: "Heavy rains causing flooding in the area.", type: "Flood" },
    { id: 2, title: "Earthquake Alert", description: "Magnitude 6.5 earthquake detected near the coast.", type: "Earthquake" },
    { id: 3, title: "Tornado Warning", description: "Tornado spotted in the southern region. Stay safe.", type: "Tornado" },
    { id: 4, title: "Heatwave Warning", description: "High temperatures expected over the next 48 hours.", type: "Heatwave" },
    { id: 5, title: "Wildfire Update", description: "Wildfire spreading near the national park. Evacuations ongoing.", type: "Wildfire" },
    { id: 6, title: "Hurricane Advisory", description: "Category 3 hurricane approaching the coastline.", type: "Hurricane" },
    { id: 7, title: "Flood Level Report", description: "Flood levels rising in the river. Evacuate areas at risk.", type: "Flood" },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      <View style={{ position: "relative", minHeight: "100%" }}>
        {/* Top Section with animated rain background */}
        <View style={{ position: "absolute", inset: 0 }}>
          <Lottie 
            loop={defaultOptions.loop} 
            autoPlay={defaultOptions.autoplay} 
            source={defaultOptions.animationData} 
            style={{ height: "100%", width: "100%" }} 
          />
        </View>
        {/* Hero Section */}
        <View style={{ position: "relative", zIndex: 10, justifyContent: "center", alignItems: "center", height: 400, backgroundColor: "rgba(0, 0, 0, 0.3)", paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 40, fontWeight: "600", marginBottom: 24, color: "#fff", textAlign: "center" }}>Disaster Management Hub</Text>
          <Text style={{ fontSize: 18, marginBottom: 24, color: "#fff", textAlign: "center" }}>
            Stay informed and report disasters for better management.
          </Text>
          <TouchableOpacity 
            style={{
              paddingHorizontal: 32,
              paddingVertical: 12,
              backgroundColor: "#e74c3c",
              borderRadius: 50,
            }}
            aria-label="Submit a disaster report"
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Stay Informed</Text>
          </TouchableOpacity>
        </View>
        {/* Real-time Disaster Data Feed Section */}
        <View style={{ zIndex: 10, marginTop: 30, paddingHorizontal: 16 }}> {/* Reduced marginTop */}
          <Text style={{ fontSize: 24, fontWeight: "600", color: "#fff", marginBottom: 16 }}>Real-time Disaster Alerts</Text>
          {/* Horizontal Scrolling Container */}
          <ScrollView 
            horizontal 
            contentContainerStyle={{ flexDirection: "row", paddingVertical: 16 }} 
            nestedScrollEnabled={true} // Enable nested scrolling
          >
            {disasterData.map((disaster) => (
              <View key={disaster.id} style={{ backgroundColor: "#2c3e50", borderRadius: 8, padding: 16, width: 256, marginRight: 16 }}>
                <Text style={{ fontSize: 18, fontWeight: "600", color: "#e74c3c" }}>{disaster.title}</Text>
                <Text style={{ fontSize: 14, color: "#bdc3c7", marginTop: 8 }}>{disaster.description}</Text>
                <View style={{ marginTop: 16, backgroundColor: "#e74c3c", paddingVertical: 4, paddingHorizontal: 12, borderRadius: 16 }}>
                  <Text style={{ fontSize: 12, fontWeight: "600", color: "#fff" }}>
                    {disaster.type}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default TabsIndexScreen;
>>>>>>> d3b62ce (Initial commit: Added project files)
