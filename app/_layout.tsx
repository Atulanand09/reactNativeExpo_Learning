import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* ye tha missing line , use this  for ADDING TAB ICONS*/}
      {/* Standalone page outside tabs */}
      <Stack.Screen
        name="about"
        options={{
          headerStyle: { backgroundColor: "orange" },
          headerTitleStyle: {
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
          },
          headerTitle: "About",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
