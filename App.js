import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./screens/HomePage";
import StartDept from "./screens/StartDept";
import Instructions from "./screens/Instructions";
import MainPage from "./screens/MainPage";
import GallaryHome from "./screens/GallaryHome";
import ImageGallary from "./screens/ImageGallary";
import VideoGallary from "./screens/VideoGallary";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Start"
            component={StartDept}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Instructions"
            component={Instructions}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="GallaryHome"
            component={GallaryHome}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ImageGallary"
            component={ImageGallary}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="VideoGallary"
            component={VideoGallary}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
