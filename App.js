import 'react-native-gesture-handler';
import React, { useStates } from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';
import { set } from 'react-native-reanimated';
// import Home from './screens/Home';
// import ColorPalette from './screens/ColorPalette';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// const Stack = createStackNavigator();
const App = () => {
  const [courseGoal, setCourseGoal] = useState([]);
  const addGoalHandler = (dgoal) => {
    if (dgoal.length === 0) {
      return;
    }
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: dgoal },
    ]);
    setopenModel(false);
  };
  const deleteHandler = (goalid) => {
    setCourseGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalid);
    });
  };
  const cancelGoalhandker = () => {
    setopenModel(false);
  };
  const [openModel, setopenModel] = useState(false);
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="ColorPalette" component={ColorPalette} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SafeAreaView>
      <View style={styles.screen}>
        <Button title="Add Goal" onPress={() => setopenModel(true)} />
        <View>
          {/* {courseGoal.map((goal) => (
            <Text key={goal}>{goal}</Text>
          ))} */}
          <GoalInput
            visible={openModel}
            cancel={cancelGoalhandker}
            onAddagoal={addGoalHandler}
          />
          <FlatList
            horizontal
            data={courseGoal}
            renderItem={({ item }) => (
              <GoalItem item={item.value} id={item.id} delete={deleteHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});

export default App;
