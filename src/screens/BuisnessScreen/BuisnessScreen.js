import React, { useState } from 'react'
import { FlatList, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
export default function BuisnessScreen(props) {
  console.log('!!!', props.route.params.item.title)

  return (
    <ScrollView style={styles.container}>
    <View style={styles.infoRecipeContainer}>
      <Text style={styles.infoRecipeName}>{props.route.params.item.title}</Text>
      <View style={styles.infoContainer}>
          <Text>{props.route.params.item.description}</Text>
      </View>
    </View>
  </ScrollView>
  )
}
