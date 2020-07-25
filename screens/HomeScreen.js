import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function HomeScreen({navigation}) {
    function navigateToLibrary() {
        navigation.navigate("library");
    }

    return(
        <View style={styles.container}>
            <Text>Bienvenue sur ma page d'accueil !</Text>
            <AntDesign name="book" size={66} color="black" />
            <Button title="Voir la bibliothèque" onPress={navigateToLibrary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 44,
    },
  });

  
export default HomeScreen;