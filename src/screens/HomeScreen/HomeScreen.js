import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { buisnesses } from '../../../data/dataArray';

export default function HomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id
    const userLogout = props.logout

    useEffect(() => {
        entityRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])


    const  onPressBuisness = item => {
        props.navigation.navigate('Buisness');
      };

    const renderBuisnesses = ({ item }) => (
        <TouchableOpacity underlayColor='rgba(73,182,77,0.9)' onPress={() => onPressBuisness(item)}>
          <View style={styles.buisnesses}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}></Text>
          </View>
        </TouchableOpacity>
     );
    return (
        <View style={styles.container}>
             <TouchableOpacity style={styles.button} onPress={userLogout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
                <View style={styles.listContainer}>
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={buisnesses}
                    renderItem={renderBuisnesses}
                    keyExtractor={item => `${item.buisnessId}`}
                />
                </View>
        </View>
    )
}
