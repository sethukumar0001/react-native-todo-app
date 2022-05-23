import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import {remove} from '../Redux/todoSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Card = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit', {itemId: item.key, Todo: item.Text})
      }>
      <View style={styles.View}>
        <Text style={{fontSize: 16, color: 'black'}}>{item.title}</Text>
        <Icon
          // onPress={() => {
          //   dispatch(remove({key: item.key}));
          // }}
          name="trash-bin"
          style={{fontSize: 20, color: '#EA4335'}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  View: {
    borderRadius: 10,
    margin: 5,
    padding: 10,
    backgroundColor: '#D3D3D3',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ECF0F1',
  },
});
