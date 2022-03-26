import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: '#fff' }}>Hello world!</Text> инлайн стили*/}
      <Text style={styles.text}>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 50,
  },
});
