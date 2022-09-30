import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ text, setCourseGoals }) => {

  const deleteGoalHandler = () => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal !== text));
  };

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default GoalItem;
