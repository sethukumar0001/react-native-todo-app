import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import InputForm from "../Components/InputForm";
// import { edit } from "../Redux/todoSlice";
import { useDispatch } from "react-redux";

const EditScreen = ({ route, navigation }) => {
  const { itemId, Todo } = route.params;
  const dispatch = useDispatch();
  const [value, setValue] = useState([]);
  const reciver = (val) => {
    setValue(val);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <InputForm reciver={reciver} placeholder={Todo} />
      <TouchableOpacity
        // onPress={() =>
        //   dispatch(
        //     edit({ id: itemId, text: value }),
        //     navigation.navigate("Home")
        //   )
        // }
      >
        <View style={styles.center}>
          <Text style={styles.button}>Add</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#fff",
  },
  button: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#5DA3FA",
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#F0F8FF",
    width: "50%",
    textAlign: "center",
    marginBottom: 95,
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default EditScreen;
