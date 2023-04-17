import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://openseauserdata.com/files/19bef99e749aa46bac62f105f35a3224.jpg'}} />
      <Text style={styles.name}>Kiki</Text>
      <Text style={styles.age}>Age: 22</Text>
      <Text style={styles.description}>I am a fun-loving person who enjoys traveling, reading, and watching movies. I am looking for someone who shares my interests and has a good sense of humor.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Profile;
