import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Input, List, ListItem } from 'react-native-elements';

function LibraryScreen({navigation}) {
    return(
        <View style={styles.container}>

            <Text>Bibliothèque de :régine:</Text>
            <Input
              placeholder='Rechercher un livre'
            />

            <List style={styles.list}>
                {
                    book.map((b) => (
                        <ListItem
                            roundAvatar
                            avatar={{uri:b.image}}
                            key={b.title}
                            title={b.title}
                        />
                    ))
                }
            </List>

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
    list: {
        marginTop: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#cbd2d9',
    }
  });
 
export default LibraryScreen;