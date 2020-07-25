import React from 'react';
import { Button, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import Button from './buttons/Button';
import Input from './input/Input';
import axios from 'axios';


function SearchTool() {

    // handleChangeName = (e) => {
    //     useState({
    //     book: e.target.value
    //     })
    // }

    // function handleSubmit() {
    //     usestate() => {
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    //     .then(res => {
    //         setBook(res.data);
    //         })
    //     })
    // }

    return ( 
        <View>
            <Text className="title is-2">bla</Text>


                <Input className ="input is-rounded" type="text" placeholder="Recherche !"
                 />

                <Button className="button is-rounded">Envoyer</Button>

        </View>
        );
    
}
 
export default SearchTool;