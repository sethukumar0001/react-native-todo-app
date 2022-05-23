import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

function InputForm(props) {
  const changeHandler = (val) => {
    props.reciver(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={changeHandler}
        defaultValue={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  input: {
    margin: 20,
    borderWidth: 2,
    borderColor: "#12B0E8",
    borderRadius: 10,
    padding: 20,
    fontSize: 20,
    backgroundColor: "#fff",
  },
});

export default InputForm;
