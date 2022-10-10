import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GoalItem, GoalInput } from "./src/Components";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.screen}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => setModalVisible(true)}
        />
        <GoalInput
          setCourseGoals={setCourseGoals}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.index.toString()}
                text={itemData.item}
                setCourseGoals={setCourseGoals}
              />
            )}
          />
        </View>

        {courseGoals.length !== 0 && (
          <View style={{ flex: 0.5 }}>
            <Button title="Clear Goals" onPress={() => setCourseGoals([])} />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
