import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert, Modal, Image } from 'react-native';

const GoalInput = ({ setCourseGoals, modalVisible, setModalVisible }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

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
        setModalVisible(false);
    };
    
    return (
        <Modal animationType="slide" visible={modalVisible} >
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/goal.png')}
                />

                <TextInput
                    placeholder="Your Course Goal"
                    style={styles.textInput}
                    value={enteredGoal}
                    onChangeText={goalInputHandler}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={() => setModalVisible(false)} color='#f31282' />
                    </View>

                    <View style={styles.button}>
                        <Button title="Add Goals" onPress={addGoalHandler} color='#b180f0' />
                    </View>

                </View>

            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 24,
        padding: 16,
        // borderBottomColor: '#ccc',
        // borderBottomWidth: 1,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        borderWidth: 1,
        padding: 8,
        width: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});

export default GoalInput;