
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
      {/* Hotline Section */}

      {/* <div className="relative z-10 mt-6 px-4 py-2 bg-yellow-500 text-black flex items-center justify-center border-2 border-white rounded-lg animate-pulse w-auto">
        <span className="text-lg font-bold mr-2">⚠️</span>
        <span className="text-lg font-bold">Hotline: 117</span>
      </div> */}
      
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




//Final one 

// import React from "react";
// import { View, Text, ScrollView, TouchableOpacity } from "react-native";
// import Lottie from "react-lottie";
// import * as Localization from 'expo-localization';
// import rain from "./rain.json";

// const TabsIndexScreen = () => {
//   // Get device language
//   const locale = Localization.locale.startsWith('si') ? 'si' : 'en';

//   // Lottie animation options
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: rain,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid meet",
//     },
//   };

//   // Bilingual disaster data
//   const disasterData = [
//     { 
//       id: 1, 
//       title_en: "Flood Warning", 
//       title_si: "ගංවතුර අනතුරු ඇගවීම", 
//       description_en: "Heavy rains causing flooding in the area.",
//       description_si: "ප්රදේශයේ ගංවතුර ඇතිවීමට හේතුවන තීව්ර වර්ෂාපතනය.",
//       type: "Flood"
//     },
//     { 
//       id: 2, 
//       title_en: "Earthquake Alert", 
//       title_si: "භූමිකම්පා ඇඟවීම", 
//       description_en: "Magnitude 6.5 earthquake detected near the coast.",
//       description_si: "වෙරළ අසබඩ සිදුවූ 6.5 පරිමාණයේ භූමිකම්පාවක් හඳුනාගෙන ඇත.",
//       type: "Earthquake"
//     },
//     { 
//       id: 3, 
//       title_en: "Tornado Warning", 
//       title_si: "ටෝනාඩෝ අනතුරු ඇගවීම", 
//       description_en: "Tornado spotted in the southern region. Stay safe.",
//       description_si: "දකුණු පළාතේ ටෝනාඩෝවක් දක්නට ලැබී ඇත. ආරක්ෂිතව සිටින්න.",
//       type: "Tornado"
//     },
//   ];

//   // Localization function
//   const getLocalizedText = (english, sinhala) => {
//     return locale === 'si' ? sinhala : english;
//   };

//   return (
//     <View className="flex-1 bg-gray-900">
//       {/* Animated Background */}
//       <View className="absolute inset-0">
//         <Lottie options={defaultOptions} height="100%" width="100%" />
//       </View>

//       {/* Content */}
//       <ScrollView className="flex-1 z-10 bg-black/30">
//         <View className="p-4">
//           <Text className="text-4xl font-bold text-white mb-6 text-center">
//             {getLocalizedText("Disaster Management Hub", "ආපදා කළමනාකරණ කේන්ද්රය")}
//           </Text>

//           <Text className="text-2xl font-semibold text-white mb-4">
//             {getLocalizedText("Real-time Alerts", "තත්කාලීන ඇඟවීම්")}
//           </Text>

//           {disasterData.map((disaster) => (
//             <View key={disaster.id} className="bg-gray-800 rounded-lg p-4 mb-4">
//               <Text className="text-xl font-semibold text-red-400">
//                 {getLocalizedText(disaster.title_en, disaster.title_si)}
//               </Text>
//               <Text className="text-sm text-gray-300 mt-2">
//                 {getLocalizedText(disaster.description_en, disaster.description_si)}
//               </Text>
//               <View className="mt-3 flex-row justify-between items-center">
//                 <Text className="text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full">
//                   {disaster.type}
//                 </Text>
//                 <Text className="text-yellow-400 text-sm">
//                   {getLocalizedText("More Info", "වැඩි විස්තර")}
//                 </Text>
//               </View>
//             </View>
//           ))}

//           <TouchableOpacity className="mt-6 px-6 py-3 bg-red-600 rounded-full self-center">
//             <Text className="text-white text-lg font-semibold">
//               {getLocalizedText("Stay Informed", "තොරතුරු ලබාගන්න")}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default TabsIndexScreen;