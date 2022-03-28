import React from 'react';
import { TextInput, View, StyleSheet, Button, Modal } from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({ visible, onCancel, value }) => {
  return (
    <Modal visible={visible} animationType={'slide'} transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder={'введите название'}
          autoCapitalize={'none'}
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button title={'Отменить'} onPress={onCancel} />
          <Button title={'Сохранить'} color={THEME.DANGER_COLOR} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
