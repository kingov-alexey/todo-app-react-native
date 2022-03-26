import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const NameFC = () => {
  return (
    <View style={styles.nameBlock}>
      <Text>START FUNCTIONAL COMPONENT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameBlock: {},
});
