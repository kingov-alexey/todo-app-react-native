import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { EditModal } from '../components/EditModal';
import { AppCard } from '../components/ui/AppCard';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHadler = title => {
    onSave(todo.id, title);
    setModal(false);
  };
  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        value={todo.title}
        onSave={saveHadler}
      />

      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button
          title="Ред."
          onPress={() => {
            setModal(true);
          }}
        />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => {
              onRemove(todo.id);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    width: '40%',
  },
  title: {
    fontSize: 20,
  },
});
