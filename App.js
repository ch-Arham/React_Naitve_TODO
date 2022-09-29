import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // This is the best way to update state when it depends on the previous state
    // as it guarantees that you're always working with the latest state snapshot
    // and not with a state snapshot that might be outdated
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    // setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Your Course Goal" 
          style={styles.textInput}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button 
          title="Add Goals" 
          onPress={addGoalHandler}
        />
      </View>
      
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal,index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
          
        </ScrollView> */}
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={(item, index) => index.toString() + Math.random().toString()}
          renderItem={itemData => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item}</Text>
            </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    width: '70%',
    marginRight: 10
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
