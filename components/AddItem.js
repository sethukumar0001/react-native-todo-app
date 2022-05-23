import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => {
    setText(textValue);
  };

  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Icon name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    height: 40,
    padding: 6,
    margin: 3,
    backgroundColor: 'white',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 15,
    margin: 3,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
