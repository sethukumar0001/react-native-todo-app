import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch } from "react-redux";
import InputForm from "../Components/InputForm";

function CreateScreen({ navigation }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const reciver = (val) => {
    setValue(val);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <InputForm reciver={reciver} />

      <View style={styles.center}>
        <TouchableOpacity
          // onPress={() => dispatch(add(value), navigation.navigate("Home"))}
        >
          <Text >Add</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  button: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#5DA3FA",
    fontSize: 30,
    paddingHorizontal: 120,
    paddingVertical: 10,
    backgroundColor: "#F0F8FF",
    width: "50%",
    textAlign: "center",
    marginBottom: 95,
    paddingLeft: 60,
    marginLeft: 50,
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default CreateScreen;
