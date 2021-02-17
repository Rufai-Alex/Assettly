import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Colorbox = ({ colorName, hexCode }) => {
  const backcolor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, backcolor]}>
      <Text style={styles.text}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Colorbox;
