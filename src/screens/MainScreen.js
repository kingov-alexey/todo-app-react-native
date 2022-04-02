import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { THEME } from '../theme';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
  );

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    };
    Dimensions.addEventListener('change', update);
    return () => {
      Dimensions.removeEventListener('change', update);
    };
  });

  let content = (
    <View style={{ width: deviceWidth }}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />}
      />
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image source={require('../../assets/no-items.png')} style={styles.image} />
        {/* <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png',
          }}
          style={styles.image}
        /> */}
      </View>
    );
  }

  return (
    <View style={styles.nameBlock}>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} onOpen={openTodo} />
        {content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
