import { Ionicons, Feather, Foundation } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from 'react-native';

const DashLayout = () => {
     return (
      <>
        {Platform.OS === "ios" ? (
            <View style={{ height: "5%", backgroundColor: "#000000"}}>
                <StatusBar style="light"/>
            </View>
        ) : (
            <View style={{ height: "5%", backgroundColor: "#000000"}}>
                <StatusBar style="light"/>
            </View>
        )}
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#2ec6dd",
                    paddingTop: 10,
                    height: 90
                },
                tabBarActiveTintColor: "#000000",
                tabBarInactiveTintColor: "#ffffff"
            }}
        >
            <Tabs.Screen 
                name="notes"
                options={{ title: "Notes", tabBarIcon: ({ focused}) => (
                    <Foundation
                        size={24}
                        name={ focused ? "clipboard-notes" : "clipboard-notes"}
                        color={focused ? "#000000" : "#ffffff"}
                    />
                )}}
            />
            <Tabs.Screen
                name="createNote"
                options={{ title: "Create", tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={24}
                        name={ focused ? "create" : "create-outline"}
                        color={focused ? "#000000" : "#ffffff"}
                    />
                )}}
            />
            <Tabs.Screen
                name="profile"
                options={{ title: "Profile", tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={24}
                        name={ focused ? "person" : "person-outline"}
                        color={focused ? "#000000" : "#ffffff"}
                    />
                )}}
            />
            <Tabs.Screen
                name="viewNote"
                options={{ href: null }}
            />
        </Tabs>
     
       </>
     )
}

export default DashLayout;