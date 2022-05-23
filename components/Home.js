import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Button,
} from 'react-native';
import Header from './Header';
import React, { useEffect, useState } from 'react';
import 'react-native-get-random-values';
import ListItem from './ListItem';
import AddItem from './AddItem';
import InProcess from './inProcess';
import Done from './Done';
import SectionHeader from './SectionHeader';

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  function fetchData() {
    fetch('http://192.168.1.150:5000/tasks/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) =>
        console.error(error)
      ) /* Base64 react native should be installed och import */
      .finally(() => setLoading(false));
  }
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = (id) => {
    fetch('http://192.168.1.150:5000/tasks/' + id, {
      method: 'DELETE',
    });
    fetchData();
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Enter an item', [{ text: 'OK' }]);
    } else {
      fetch('http://192.168.1.150:5000/tasks/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: text,
          status: 'TODO',
        }),
      });
      fetchData();
    }
  };
  const moveItemDown = (id) => {
    setData((data) => {
      data.map((item) => {
        if (item._id == id) {
          if (item.status == 'TODO') {
            fetch('http://192.168.1.150:5000/tasks/' + id, {
              method: 'PATCH',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                /* stringify (base64.encode('pwd' + password)) */
                status: 'INPROCESS',
              }),
            });
            fetchData();
          } else if (item.status == 'INPROCESS') {
            fetch('http://192.168.1.150:5000/tasks/' + id, {
              method: 'PATCH',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                status: 'DONE',
              }),
            });
            fetchData();
          }
          return item;
        }
      });
      console.log(data);
      return data.filter((item) => item);
    });
    return data;
  };
  const moveItemUp = (id) => {
    setData((data) => {
      data.map((item) => {
        if (item._id == id) {
          if (item.status == 'INPROCESS') {
            fetch('http://192.168.1.150:5000/tasks/' + id, {
              method: 'PATCH',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                status: 'TODO',
              }),
            });
            fetchData();
          } else if (item.status == 'DONE') {
            fetch('http://192.168.1.150:5000/tasks/' + id, {
              method: 'PATCH',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                status: 'INPROCESS',
              }),
            });
            fetchData();
          }
          return item;
        }
      });
      return data.filter((item) => item);
    });
    return data;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Header title="ToDoList" search={search} setSearch={setSearch} />
      <AddItem addItem={addItem} />
      <SectionHeader
        title="ToDo"
        number={data.filter((item) => item.status == 'TODO').length}
      />
      <FlatList
        style={styles.FlatList}
        data={data.filter((item) =>
          item.title.toLocaleLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => (
          <ListItem
            style={styles.FlatList}
            item={item}
            deleteItem={deleteItem}
            moveItemDown={moveItemDown}
          />
        )}
      />
      <SectionHeader
        title="In Process"
        number={data.filter((item) => item.status == 'INPROCESS').length}
      />
      <FlatList
        style={styles.FlatList}
        data={data.filter((item) =>
          item.title.toLocaleLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => (
          <InProcess
            item={item}
            deleteItem={deleteItem}
            moveItemDown={moveItemDown}
            moveItemUp={moveItemUp}
          />
        )}
      />
      <SectionHeader
        title="Done"
        number={data.filter((item) => item.status == 'DONE').length}
      />
      <FlatList
        data={data.filter((item) =>
          item.title.toLocaleLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => (
          <Done
            item={item}
            deleteItem={deleteItem}
            moveItemDown={moveItemDown}
            moveItemUp={moveItemUp}
          />
        )}
      />
      <View style={styles.buttons}>
        <Button title="All" onPress={() => navigation.navigate('All', {})} />
        <Button title="ToDo" onPress={() => navigation.navigate('Todo', {})} />
        <Button
          title="InProgress"
          onPress={() => navigation.navigate('ItemsInProgress', {})}
        />
        <Button
          title="Done"
          onPress={() => navigation.navigate('AllDone', {})}
        />
      </View>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#D3D3D3',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FlatList: {
    margin: 0,
  },
});
