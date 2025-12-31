import { Ionicons, Feather } from "@expo/vector-icons";
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
                    <Ionicons
                        size={24}
                        name={ focused ? "home" : "home-outline"}
                        color={focused ? "#000000" : "#ffffff"}
                    />
                )}}
            />
            <Tabs.Screen
                name="createNote"
                options={{ title: "Create", tabBarIcon: ({ focused }) => (
                    <Feather
                        size={24}
                        name={ focused ? "upload-cloud" : "upload-cloud"}
                        color={focused ? "#000000" : "#ffffff"}
                    />
                )}}
            />
            <Tabs.Screen
                name="profile"
                options={{ title: "Profile", tabBarIcon: ({ focused }) => (
                    <Ionicons
                        size={24}
                        name={ focused ? "cart" : "cart-outline"}
                        color={focused ? "#000000" : "#ffffff"}
                    />
                )}}
            />
        </Tabs>
       </>
     )
}

export default DashLayout;