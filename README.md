 - **CSS cascading and Inheritance effect does not work in react native as there wasnt any css to begin with.**

 - **Rounded border does not show in Iphone. We have to provide styles in
   View for them to show in andriod and iphone**

 - **ScrollView renders all its child items no matter how long the list   
   it. causes performance issue (no lazy load) (static data like   
   article)**

 - **FlatList (lazy load) (dynamic data like list)**
---------------------------------------------------
const addGoalHandler = () => {
    // This is the best way to update state when it depends on the previous state
    // as it guarantees that you're always working with the latest state snapshot
    // and not with a state snapshot that might be outdated
    if(!enteredGoal){
      Alert.alert('Error', 'Please enter a goal', [{text: 'Okay', style: 'destructive'}]);
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    setEnteredGoal('');
 };

----

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
                <GoalItem text={itemData.item} />
              )}
            />
    </View>


**

 - Touchable etc is now replaced by Pressable

**

Adding ripple effect on press in handled by andriod_ripple on andriod but for ios we pass an object to the style prop and destructure pressed state and apply styling if it is pressed:

    <View style={styles.goalItem}>
      <Pressable 
        onPress={handleDelete} 
        android_ripple={{color: '#ddd', borderless: false}}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>


 - **Custom Buttons are made via Pressable**