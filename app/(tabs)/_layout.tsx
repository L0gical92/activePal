import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor:
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Hem",
        }}
      />
      <Tabs.Screen
        name="activites"
        options={{
          tabBarLabel: "Aktiviteter",
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          tabBarLabel: "Grupper",
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          tabBarLabel: "Vänner",
        }}
      />
    </Tabs>
  );
};

export default Layout;
