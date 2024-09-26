import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function AddScreen({ route, navigation }) {
  const { setTodos } = route.params;
  const [title, setTitle] = useState("");

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), title, done: false },
    ]);
    navigation.goBack(); // Close the modal after adding
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="Enter todo title"
        value={title}
        onChangeText={setTitle}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
          marginBottom: 20,
        }}
      />
      <Button title="Add Todo" onPress={addTodo} />
    </View>
  );
}
