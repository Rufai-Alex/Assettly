import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Colorbox = ({ colorName, hex }) => {
  const backcolor = {
    backgroundColor: hex,
  };
  return (
    <View style={(styles.box, backcolor)}>
      <Text style={styles.text}>
        {colorName} {hex}
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
    color: 'white',
  },
});

export default Colorbox;
