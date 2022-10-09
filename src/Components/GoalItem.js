import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ text, setCourseGoals, id }) => {

  const handleDelete = () => {
    setCourseGoals(prevGoals => prevGoals.filter((goal, index) => index.toString() !== id));
  };

  return (
    <View style={styles.goalItem}>
      <Pressable 
        onPress={handleDelete} 
        android_ripple={{color: '#ddd', borderless: false}}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
      opacity: 0.5
    },
    goalText: {
        color: '#fff',
        padding: 8,
    }
});

export default GoalItem;
