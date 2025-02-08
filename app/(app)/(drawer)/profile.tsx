import { useSession } from "@/context";
import React from "react";
import { View, Text } from "react-native";

const ProfileScreen = () => {
  const { user } = useSession();
  const displayName =
    user?.displayName || user?.email?.split("@")[0] || "Guest";

 
  return (
    <View className="items-center bg-slate-200 rounded-xl w-auto p-8">
                    <View className="w-20 h-20 bg-gray-400 rounded-full justify-center items-center mb-2">
                      <Text className="text-5xl font-bold text-white">
                        {displayName?.charAt(0) || "?"}
                      </Text>
                    </View>
                    <Text className="text-[14px] font-bold text-gray-800">
                      {displayName || "Unknown"}
                    </Text>
                    <Text className="text-normL font-semibold  text-blue-900 mt-2">
          Last Seen: {user?.metadata?.lastSignInTime}
        </Text>
        <Text className="text-normal font-semibold  text-blue-900 mt-2">
          Created: {user?.metadata?.creationTime}
        </Text>
    </View>
  );
};

export default ProfileScreen;
