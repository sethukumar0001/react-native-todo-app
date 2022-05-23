import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({ item, deleteItem, moveItemDown }) => {
  return (
    item.status == 'TODO' && (
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.title}</Text>

          <View style={styles.icons}>
            <Icon
              style={styles.removeBtn}
              name="remove"
              size={30}
              color="white"
              onPress={() => deleteItem(item._id)}
            />
            <Icon
              style={styles.downBtn}
              name="angle-double-down"
              size={30}
              color="white"
              onPress={() => moveItemDown(item._id)}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  );
};
export default ListItem;
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  listItemView: {
    flexDirection: 'row',
  },
  listItemText: {
    width: '80%',
    fontSize: 18,
  },
  icons: {
    width: '20%',
    flexDirection: 'row',
  },
  removeBtn: {
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '50%',
    borderRadius: 50,
  },
  downBtn: {
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '50%',
    borderRadius: 50,
  },
});
