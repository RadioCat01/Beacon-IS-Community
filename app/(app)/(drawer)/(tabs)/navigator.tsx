// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // Import screens
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import SettingsScreen from './screens/SettingsScreen';

// // Define the screen names for easy reference
// const homeName: string = "Home";
// const detailsName: string = "Details";
// const settingsName: string = "Settings";

// // Create the Bottom Tab Navigator
// const Tab = createBottomTabNavigator();

// // Main navigation container
// function MainContainer(): JSX.Element {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName={homeName}  // Set the initial route
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             // Declare a variable to store the icon name
//             let iconName: string;
//             let rn: string = route.name;  // Get the current route name

//             // Set the icon name based on the current route
//             if (rn === homeName) {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (rn === detailsName) {
//               iconName = focused ? 'list' : 'list-outline';
//             } else if (rn === settingsName) {
//               iconName = focused ? 'settings' : 'settings-outline';
//             }

//             // Return the icon component with the selected icon
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato', // Color for active tab
//           inactiveTintColor: 'grey', // Color for inactive tab
//           labelStyle: { paddingBottom: 10, fontSize: 10 }, // Label style for tabs
//           style: { padding: 10, height: 70 }, // Tab bar style
//         }}
//       >
//         {/* Define the screens in the bottom tab navigator */}
//         <Tab.Screen name={homeName} component={HomeScreen} />
//         <Tab.Screen name={detailsName} component={DetailsScreen} />
//         <Tab.Screen name={settingsName} component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MainContainer;
