import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';


// with state implementation
const Search = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text>Search</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(val) => setText(val)}
      />
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    fontSize: 30,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 15
  }
});

export default Search;