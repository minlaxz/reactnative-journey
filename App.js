import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const CatHungry = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={styles.viewContainer}>
      <Text>I am {props.name} and I am {isHungry ? "hungry" : "full."}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={isHungry ? "Gimme Some Milk!" : "Thanks"}
          onPress={() => { setIsHungry(false) }}
          disabled={!isHungry}
        />
        <Button
          title={isHungry ? "Disabled" : "Refresh"}
          onPress={() => { setIsHungry(true) }}
          disabled={isHungry}
        />
      </View>
    </View>
  )
}

const counter = (text) => {
  let count = text.split(' ').length - 1
  if (count < 100) {
    return count
  } else { return 'This is GOD!' }
}

const TextOnChaning = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.viewContainer}>
      <TextInput
        style={{ height: 45, marginTop: 30, borderWidth : 1, borderColor:'black' }}
        placeholder='Type here.'
        onChangeText={text => setText(text)}
        defaultValue={text}
      >
      </TextInput>
      <Text
        style={styles.textStyle}> {}
      {text}
      </Text>
      <Text>
        Count : {counter(text)}
      </Text>
    </View>
  )
}

const Listing = () => {
  return (
    <>
      <CatHungry name='PaTa' />
      <TextOnChaning />
    </>

  )
}

export default function App() {
  return (
    <Listing />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
    padding: 10
  },
  buttonContainer: {
    marginBottom: 10,
    padding: 10
  },
  textStyle: {
    marginTop : 10,
    textAlign: 'center',
    fontSize : 15,
    borderWidth : 1,
    borderColor : 'cyan',
    padding: 10,
    fontWeight : 'bold'
  }
});
