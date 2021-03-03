import React, { useState } from 'react'
import { FlatList, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
export default function BuisnessScreen(props) {
  console.log('!!!', props.route.params.item.photo_url)

  return (
    <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View>
          <Image source={props.route.params.item.photo_url} />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{props.route.params.item.title}</Text>
          <View style={styles.infoContainer}>
              <Text>{props.route.params.item.description}</Text>
          </View>
          <View style={styles.contactInfo}>
            <Text>Contact Info:</Text>
              <Text>{props.route.params.item.contact.name}</Text>
              <Text>{props.route.params.item.contact.phone}</Text>
              <Text>{props.route.params.item.contact.hours}</Text>
              <Text>{props.route.params.item.contact.email}</Text>
              <Text>{props.route.params.item.contact.address}</Text>
          </View>
        </View>
    </ScrollView>
  )
}
