import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

// any additional imports
import Task from "./components/Task";
export default function App() {
  // input area
  const [task, setTask] = useState();

  // to store all tasks
  const [taskItem, setTaskItems] = useState([]);

  // event listener logic for creating task
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...setTaskItems, task]);
    serTask(null);
  };

  // event listner logic for deleting task
  const completeTask = (index) => {
    let copyItems = [...taskItems];
    // remove the specific task as selected by the user
    copyItems.splice(index, 1);
    //update the original array by rewriting it with the the copied array
    setTaskItems(copyItems);
  };

  return (
    <View style={styles.container}>
      {/* List all the to do items  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>My To Do Items</Text>

        {/* container or wrapper for the tasks to be rendered */}
        <View style={styles.sectionTitle}>
          {/* <Task text={"this is task 1"}/> */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
                );
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* User input for todo tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add your to do item here"}
          value="task"
          onChangeText={() => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={StyleSheet.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
  },
  addText: {},
});
