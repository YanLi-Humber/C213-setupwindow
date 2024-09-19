import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('Hey! Open up App.js to start working on your app!');

  const handleButtonPress = () => {
    setDisplayText(inputValue);
    setInputValue(''); // Clear the input after pressing the button
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Submit" onPress={handleButtonPress} />
      <Text style={styles.text}>{displayText}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    marginTop: 40,
    fontSize: 25,
  },
});
