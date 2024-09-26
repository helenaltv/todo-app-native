import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import AddScreen from "./screens/AddScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} todos={todos} setTodos={setTodos} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
