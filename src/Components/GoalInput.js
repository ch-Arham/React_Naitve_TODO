import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

const GoalInput = ({ enteredGoal, setEnteredGoal, setCourseGoals }) => {
    const [isAddMode, setIsAddMode] = useState(false);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        if(!enteredGoal){
            Alert.alert('Error', 'Please enter a goal', [{text: 'Okay', style: 'destructive'}]);
            return;
        }
        // This is the best way to update state when it depends on the previous state
        // as it guarantees that you're always working with the latest state snapshot
        // and not with a state snapshot that might be outdated
        setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
        setEnteredGoal('');
    };
    
    return (
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
    );
};


const styles = StyleSheet.create({
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
});

export default GoalInput;