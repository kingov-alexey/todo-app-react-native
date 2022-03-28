import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  //стейт экранов
  const [todoId, setTodoId] = useState('2');

  //Стейт дел
  const [todos, setTodos] = useState([
    { id: '1', title: 'Выучить React Native' },
    { id: '2', title: 'Написать приложение TODO' },
    { id: '3', title: 'test3' },
    { id: '4', title: 'test4' },
    { id: '5', title: 'test5' },
    { id: '6', title: 'test6' },
    { id: '7', title: 'test7' },
    { id: '8', title: 'test8' },
    { id: '9', title: 'test9' },
  ]);

  //Добавление нового элемента
  const addTodo = title => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   titile: title,
    // };

    // setTodos(prevTodos => {
    //   return [...prevTodos, newTodo];
    // });

    setTodos(prev => [
      {
        id: Date.now().toString(),
        title,
      },
      ...prev,
    ]);
  };

  //Удаление элемента
  const removeTodo = id => {
    const todo = todos.find(t => t.id === id);
    Alert.alert('Удаление элемента', `Вы уверены, что хотите удалить "${todo.title}"?`, [
      {
        text: 'Отмена',
        style: 'cancel',
      },
      {
        text: 'Удалить',
        style: 'destructive',
        onPress: () => {
          setTodoId(null);
          setTodos(prev => prev.filter(todo => todo.id !== id));
        },
      },
    ]);
  };

  //Редактирование элемента
  const updateTodo = (id, title) => {
    setTodos(old =>
      old.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      // openTodo={id => {
      //   setTodoId(id);
      // }}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => {
          setTodoId(null);
        }}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
