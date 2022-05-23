import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Search';

const Header = ({ title, search, setSearch }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Search search={search} setSearch={setSearch} />
    </View>
  );
};

Header.defaultProps = {
  title: 'ToDoList' /* default value in case the props is not given */,
};

const styles = StyleSheet.create({
  header: {
    alignContent: 'center',
    backgroundColor: 'purple',
    height: 80,
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;
