import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Colorbox from './component/colorbox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Here are some box with different color</Text>
        <View style={styles.cyan}>
          <Text>Cyan: #2aa 198</Text>
        </View>
        <View style={[styles.blue]}>
          <Text>Blue: #268bd2</Text>
        </View>
        <View style={[styles.magenta]}>
          <Text>Magenta: #d33682</Text>
        </View>
        <View style={[styles.orange]}>
          <Text>e: #cb4b16</Text>
        </View>
        <Colorbox colorName="cyan" hex="#2aa198" />
        <Colorbox colorName="cyan" hex="#2aa198" />
        <Colorbox colorName="Blue" hex=" #268bd2" />
        <Colorbox colorName="Magenta" hex="#d33682" />
        <Colorbox colorName="Orange" hex="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
export default App;
