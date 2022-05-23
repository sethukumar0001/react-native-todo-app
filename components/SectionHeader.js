import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SectionHeader = ({ title, number }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {title} ({number})
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: 30,
    padding: 0,
  },
  headerText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default SectionHeader;
