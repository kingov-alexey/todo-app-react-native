import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View style={styles.nameBlock}>
      <Text>{todo.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" color={'#757575'} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            color={'#e53935'}
            onPress={() => {
              console.log('удалить');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameBlock: {},
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
});
