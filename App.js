import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const name = 'John Doe';
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello World!</Text>

      <Text style={styles.dummyText}>My name is {name}</Text>

      <Button title="Click Me" onPress={() => alert('Hello World!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    borderWidth: 3,
    padding: 16,
    borderColor: 'blue',
  }
});
