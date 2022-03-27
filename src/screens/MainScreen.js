import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View style={styles.nameBlock}>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} onOpen={openTodo} />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameBlock: {},
});
