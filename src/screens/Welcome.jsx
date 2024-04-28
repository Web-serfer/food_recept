import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const heroImg = require('../assets//images/soup.png');

export default function Welcome({ navigation }) {
  return (
    <View style={s.container}>
      {/* image  */}
      <Image 
        source={heroImg} 
        resizeMode="contain" 
        style={s.heroImg}
      />
      <Text style={s.title}>40K+ Premium Recipe</Text>
      <Text style={s.subTitle}>Cook Like A Chef</Text>

      {/* button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('RecipeList')}
        style={s.btn}
      >
        <Text style={s.btnText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroImg: {
    width: 390,
    height: 330,
    marginBottom: 20,
  },

  title: {
    color: '#f96163',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subTitle: {
    color: '#3c444c',
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 44,
    marginBottom: 50,
  },

  btn: {
    backgroundColor: '#f96163',
    borderRadius: 18,
    paddingVertical: 18,
    width: '80%',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});
