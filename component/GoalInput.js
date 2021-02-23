import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const GoalInput = (props) => {
  const [entergoal, setentergoal] = useState('');

  const addGoalHandler = () => {
    props.onAddagoal(entergoal);
    setentergoal('');
  };
  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={(text) => setentergoal(text)}
          value={entergoal}
        />
        <View style={styles.Buttons}>
          <Button title="CANCEL" color="red" onPress={props.cancel} />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});
