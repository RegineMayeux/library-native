import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Card, Image } from 'react-native-elements';
import '../datas/books.json';

const BookScreen = ({navigation, route}) => {

    const book = route.params;

    return(
        <View style={styles.container}>
            <Card title ={book.title}>
                <Text>
                    Auteur :<br></br>
                    {book.author}
                </Text>
                <Image
                    // style={styles.image}
                    resizeMode="cover"
                    source={{ uri: book.image }}
                />
                <Text>
                    Description :<br></br>
                    {book.description}
                </Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})


export default BookScreen;