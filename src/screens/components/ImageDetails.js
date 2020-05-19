import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ item }) => {

  return (
    <View style={styles.viewStyle}>
      <Image source={item.image} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{item.name}</Text>
      <Text style={styles.subtextStyle}>{item.profession}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 5
  },
  textStyle: {
    fontSize: 24,
  },
  subtextStyle: {
    color: 'grey',
    fontSize: 20,
  },
  imageStyle: {
    height: 250,
    width: 250,
  }
});

export default ImageDetail;