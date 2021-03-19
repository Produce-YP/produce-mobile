import React, { useState, useRef, useCallback } from 'react'
import { FlatList, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableHighlight, Dimensions, View, Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles';
import { defImg } from '../../../assets/splash.png'

const { width: viewportWidth } = Dimensions.get('window');

export default function BuisnessScreen(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(props.route.params.item.photosArray);
  const ref = useRef(null);
  console.log('!!!', props.route.params.item.photosArray)


  const renderItem = useCallback(({ item }) => (
    <View
      style={styles.imageContainer}
    >
      <Image style={styles.image} source={{uri: item}} />
    </View>
  ), []);



    return (
      <ScrollView style={styles.container}>
          <View style={styles.carouselContainer}>
            <Carousel
            layout="default"
            ref={ref}
            data={carouselItems}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
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
            <View> 
              <Image style={styles.image} source={{uri: props.route.params.item.map}} />
            </View>
          </View>
      </ScrollView>
    )
}


{/* <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../assets/splash.png')} />
          </View> */}
