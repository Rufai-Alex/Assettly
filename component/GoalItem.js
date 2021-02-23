import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.delete.bind(this, props.id)}>
      <View style={styles.liststyle}>
        <Text>{props.item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  liststyle: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    margin: 4,
    padding: 4,
    color: 'white',
  },
});

export default GoalItem;
