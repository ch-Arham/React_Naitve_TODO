import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { GoalItem, GoalInput } from "./src/Components"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  return (
    <View style={styles.screen}>
      <GoalInput setCourseGoals={setCourseGoals} />
      
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={(item, index) => index.toString() + Math.random().toString()}
          renderItem={itemData => (
            <GoalItem text={itemData.item} setCourseGoals={setCourseGoals} />
          )}
        />
      </View>

      <View style={{flex:0.5}}>
        <Button title="Clear Goals" onPress={() => setCourseGoals([])} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff'
  }
});
