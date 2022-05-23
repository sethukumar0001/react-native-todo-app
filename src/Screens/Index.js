import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Card from '../Components/card';
import { todoList } from '../Redux/actions';
import {connect} from 'react-redux';
import { getAllTodoList } from '../Redux/actionCreators/todo/index';

const Index = (props) => {

  const [list,setList] = useState([])

  useEffect(()=>{
    props.getAllTodoList()
  },[])

  console.log(props.todos,"------>")

  return (
    <View style={styles.View}>
      <View style={styles.CView}>
        <FlatList
          data={props.todos?.todoList}
          style={{marginTop: 10, width: '90%'}}
          keyExtractor={item => item.key}
          renderItem={({item}) => <Card item={item} />}
        />
      </View>
      <View style={styles.add}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>
          <Text style={styles.button}>Add TODO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: '#F8F9F9',
  },
  HView: {
    flex: 1,
    justifyContent: 'center',
  },
  CView: {
    flex: 11,
    alignItems: 'center',
  },
  Heading: {
    fontSize: 20,
    marginLeft: 10,
    color: 'black',
  },
  Card: {
    backgroundColor: '#23C4ED',
  },
  add: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 2,
    backgroundColor: '#EA4335',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderColor: 'gray',
    color: 'white',
    borderColor: 'white',
    fontWeight:'800',
    fontSize: 16,
    padding: 5,
  },
});

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getAllTodoList: id => dispatch(getAllTodoList(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
