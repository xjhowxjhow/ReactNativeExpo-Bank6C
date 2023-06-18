import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Button } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  
  const styles = StyleSheet.create({

    container:{
      backgroundColor: '#2f2b29',
      width:'100%',
      height:'100%',
    }
  })

  return (
    <View style={styles.container}>
      <Text>HomeScreen pagge</Text>
    </View>
  )
}