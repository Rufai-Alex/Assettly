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
// import Home from './screens/Home';
// import ColorPalette from './screens/ColorPalette';
// import { createStackNavigator } from '@react-navigation/stack';

// import { NavigationContainer } from '@react-navigation/native';

// const Stack = createStackNavigator();
const App = () => {
  const [entergoal, setentergoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);
  const addGoalHandler = () => {
    setCourseGoal((currentGoals) => [...currentGoals, entergoal]);
  };
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="ColorPalette" component={ColorPalette} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SafeAreaView>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={(text) => setentergoal(text)}
            value={entergoal}
          />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
        <View>
          {/* {courseGoal.map((goal) => (
            <Text key={goal}>{goal}</Text>
          ))} */}
          <FlatList
            horizontal
            data={courseGoal}
            renderItem={({ item }) => (
              <View style={styles.liststyle}>
                <Text>{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  liststyle: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    margin: 4,
    padding: 4,
    color: 'white',
  },
});

export default App;
