import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ImageDetail from './components/ImageDetails';

const Image = () => {
  const list = [
    { name: 'Yoda', profession: 'Jedi', image: require('../../assets/yoda.jpg') },
    { name: 'Windu', profession: 'Jedi', image: require('../../assets/windu.jpeg') },
    { name: 'Kenobi', profession: 'Jedi', image: require('../../assets/kenobi.jpg') },
    { name: 'Padme', profession: 'Senator', image: require('../../assets/padme.png') },
    { name: 'Palpatine', profession: 'Senator/ Planner', image: require('../../assets/palpatine.jpg') },
    { name: 'Darth Vader', profession: 'Sith Lord', image: require('../../assets/vader.jpg') },
    { name: 'Luke', profession: 'Jedi', image: require('../../assets/luke.jpg') },
    { name: 'Leia', profession: 'Senator', image: require('../../assets/leia.jpg') },
  ];
  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={list}
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(person) => person.name}
        renderItem={({ item }) => <ImageDetail item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 5,
    alignItems: 'center',
  },
  textStyle: {
    color: 'red',
    fontSize: 24,
  },
  subtextStyle: {
    color: 'blue',
    fontSize: 20,
  }
});

export default Image;