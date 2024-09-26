import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([
    { id: "1", title: "Do the laundry", done: false },
    { id: "2", title: "Buy groceries", done: true }, // Denna todo är markerad som done
  ]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { todo: item, setTodos })}
      >
        <View style={styles.todoContent}>
          {item.done ? (
            <Text style={{ fontSize: 18, color: "green" }}>✔️</Text>
          ) : null}
          <Text
            style={{
              fontSize: 18,
              textDecorationLine: item.done ? "line-through" : "none",
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTodo(item.id)}>
        <Text style={styles.deleteButton}>Ta bort</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Add", { setTodos })}
      >
        <Text style={{ fontSize: 18, color: "blue" }}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  todoContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    color: "red",
    fontSize: 16,
  },
});
