// // Home Page

// import React from "react";
// import { View, Text, Pressable } from "react-native";
// import { useSession } from "@/context";
// import { router } from "expo-router";

// const TabsIndexScreen = () => {

//   const { signOut, user } = useSession();
//   const handleLogout = async () => {
//     await signOut();
//     router.replace("/sign-in");
//   };

//   const displayName = user?.displayName || user?.email?.split('@')[0] || 'Guest';

//   return (
//     <View className="flex-1 justify-center items-center p-4">
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

//new

import React from "react";
import Lottie from "react-lottie";
import rain from "./rain.json";

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
    <div className="overflow-auto h-screen">
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Top Section with animated rain background */}
      <div className="absolute inset-0">
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-30 backdrop-blur-sm">
        <h1 className="text-5xl font-semibold mb-6 px-3 ">Disaster Management Hub</h1>
        <p className="text-xl mb-6 px-3">
          Stay informed and report disasters for better management.
        </p>
        <button 
          className="px-8 py-3 bg-red-600 text-white rounded-full text-lg"
          aria-label="Submit a disaster report"
        >
          Stay Informed
        </button>
      </div>

      {/* Real-time Disaster Data Feed Section */}
      <div className="relative z-10 mt-10 px-4">
        <h2 className="text-3xl font-semibold text-white mb-4">Real-time Disaster Alerts</h2>
        {/* Horizontal Scrolling Container */}
        <div className="flex overflow-x-auto space-x-4 py-4">
          {disasterData.map((disaster) => (
            <div key={disaster.id} className="flex-none bg-gray-800 rounded-lg p-4 w-64">
              <h3 className="text-xl font-semibold text-red-600">{disaster.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{disaster.description}</p>
              <span className="mt-4 inline-block text-xs font-semibold bg-red-500 text-white px-3 py-1 rounded-full">
                {disaster.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default TabsIndexScreen;
