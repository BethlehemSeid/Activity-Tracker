import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialIcons} from '@expo/vector-icons';

export default function List({navigation}) {

    const [todos, setTodos] = React.useState([
    ]);
    const [textInput, setTextInput] = React.useState('');
    React.useEffect(() => {
    getTodosFromUserDevice();
    }, []);
    React.useEffect(() => {
    saveTodoToUserDevice(todos);
    }, [todos]);

    const addTodo = () => {
        Keyboard.dismiss();
        if (textInput != '') {
            const newTodo = {
            id: Math.random(),
            task: textInput,
            completed: false,
            };
            setTodos([...todos, newTodo]);
            setTextInput('');
        }
    };

    // const openMenu = () => {
    //     navigation.openDrawer
    // }

    const saveTodoToUserDevice = async todos => {
    try {
        const stringifyTodos = JSON.stringify(todos);
        await AsyncStorage.setItem('todos', stringifyTodos);
    } catch (error) {
        console.log(error);
    }
    };

    const getTodosFromUserDevice = async () => {
    try {
        const todos = await AsyncStorage.getItem('todos');
        if (todos != null) {
        setTodos(JSON.parse(todos));
        }
    } catch (error) {
        console.log(error);
    }
    };

    const markTodoComplete = todoId => {
    const newTodosItem = todos.map(item => {
        if (item.id == todoId) {
        if(item.completed == true){
            return {...item, completed: false};
        }else{
            return {...item, completed: true};
        }
        }
        return item;
    });

    setTodos(newTodosItem);
    };


    const deleteTodo = todoId => {
    const newTodosItem = todos.filter(item => item.id != todoId);
    setTodos(newTodosItem);
    };

    const clearAllTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [
        {
        text: 'Yes',
        onPress: () => setTodos([]),
        },
        {
        text: 'No',
        },
    ]);
    };

    const ListItem = ({todo}) => {
    return (
        <View style={styles.listItem}>
        <View style={{flex: 1}}>
            <Text
            style={{
                fontSize: 15,
                color: '#000',
                textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.task}
            </Text>
        </View>

        
            <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
            <View style={[styles.actionIcon, {backgroundColor: '#A8D4FF'}]}>
            {!todo?.completed? <Icon name="done" size={20} color="#A8D4FF" /> : <Icon name="done" size={20} color="white" /> }
            </View>
            </TouchableOpacity>
        
        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
            <View style={styles.actionIcon}>
            <Icon name="delete" size={20} color="#474747" />
            </View>
        </TouchableOpacity>
        </View>
    );
    };

    return (
    <View style={styles.container}>  
        {/* <View style={styles.header}>
            <MaterialIcons name='menu' size={26} onPress={navigation.openDrawer} style={{paddingRight: 10, paddingTop: 2}} />
            <Text style={styles.headerText}>
                Activity List
            </Text>
            <Icon name="delete" size={20} onPress={clearAllTodos}/>
        </View> */}
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding: 20, paddingBottom: 100}}
            data={todos}
            renderItem={({item}) => <ListItem todo={item}/>}
        />
        
        <View style={styles.footer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inputContainer}>
                    <TextInput
                    value={textInput}
                    placeholder="Add Todo"
                    onChangeText={text => setTextInput(text)}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity onPress={addTodo}>
                <View style={styles.iconContainer}>
                <Icon name="add" color="white" size={30} />
                </View>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBFDFF', 
    },
    header: {
      backgroundColor: '#CCE0E3',
      paddingTop: 60,
      paddingHorizontal:30,
      paddingBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', 
    },
    headerText: {
      fontSize: 20,
      color: '#000',
    },
    footer: {
      position: "absolute",
      bottom: 0,
      color: "#fff",
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    inputContainer: {
      padding: 10,
      paddingHorizontal: 20,
      elevation: 40,
      backgroundColor: '#fff',
      flex: 1,
      marginVertical: 20,
      marginRight: 20,
      borderRadius: 30,
    },
    iconContainer: {
      height: 50,
      width: 50,
      backgroundColor: '#737373',
      elevation: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listItem: {
      padding: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
      elevation: 12,
      borderRadius: 7,
      marginVertical: 10,
    },
    actionIcon: {
      height: 25,
      width: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
      borderRadius: 3,
    },
  });
  