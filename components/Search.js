import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = ({ search, setSearch }) => {
  return (
    <View>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        value={search}
        onChangeText={(e) => setSearch(e)}
      />
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  input: {
    alignSelf: 'flex-start',
    width: 300,
    height: 30,
    padding: 8,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 30,
  },
});
