import React from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
export default function DetailScreen({ route, navigation }) {
  const { todo, setTodos } = route.params;

  const markAsDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, done: true } : item
      )
    );
    navigation.goBack(); // Gå tillbaka till HomeScreen efter uppdatering
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>{todo.title}</Text>
      <Text style={{ fontSize: 18 }}>
        Status: {todo.done ? "Done" : "Not Done"}
      </Text>
      <Button title="Mark as Done" onPress={markAsDone} />
    </View>
  );
}
