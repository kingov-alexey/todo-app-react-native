import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const pressHadler = () => {
    onSubmit('test todo');
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" onPress={pressHadler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
});
