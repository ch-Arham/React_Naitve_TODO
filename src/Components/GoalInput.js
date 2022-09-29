import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = ({ enteredGoal, setEnteredGoal }) => {
    const [isAddMode, setIsAddMode] = useState(false);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        if(!enteredGoal){
            Alert.alert('Error', 'Please enter a goal', [{text: 'Okay', style: 'destructive'}]);
            return;
        }
        setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
        setEnteredGoal('');
    };
    
    return (
        <Modal visible={isAddMode} animationType="slide">
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
        </Modal>
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