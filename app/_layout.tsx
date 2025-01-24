import { SessionProvider } from '@/context';
import { Slot } from 'expo-router';
import {StyleSheet, View, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "../global.css";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

export default function RootLayout() {
  
  return (
   <SessionProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider><Slot/></SafeAreaProvider>
      </GestureHandlerRootView>
   </SessionProvider>
  );
}
