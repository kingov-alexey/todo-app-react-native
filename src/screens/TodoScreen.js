import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View style={styles.nameBlock}>
      <Text>{todo.title}</Text>
      <Button title="Назад" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  nameBlock: {},
});
