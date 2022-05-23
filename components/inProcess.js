import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InProcess = ({ item, deleteItem, moveItemDown, moveItemUp }) => {
  return (
    item.status == 'INPROCESS' && (
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
              style={styles.upBtn}
              name="angle-double-up"
              size={30}
              color="white"
              onPress={() => moveItemUp(item._id)}
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
export default InProcess;
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    width: '70%',
    fontSize: 18,
  },
  icons: {
    alignSelf: 'center',
    width: '30%',
    flexDirection: 'row',
  },
  removeBtn: {
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '33%',
    borderRadius: 50,
    /* marginRight:'10%', */
  },
  downBtn: {
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '33%',
    borderRadius: 50,
    /* marginLeft:'10%', */
  },
  upBtn: {
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '33%',
    borderRadius: 50,
    /*  marginLeft:'10%', */
  },
});
