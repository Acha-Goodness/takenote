import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
        <StatusBar value="auto"/>
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" options={{ title: "Landing"}}/>
        </Stack>
    </>
  )
}

export default RootLayout;
