import React, {useState, useEffect} from 'react';
import { View, Text, Image, FlatList,ScrollView, StyleSheet } from 'react-native';
import yelp from '../api/yelp'

const ResultScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id')
    
    const getResult = async (id) => {
        try{
            const response = await yelp.get('/restaurant', {
                params: {
                    res_id: id
                }
            })
            setResult(response.data)
        }
        catch(e) {
            console.log(e);
        }
    }
    
useEffect(() => {
    getResult(id);
}, []);

    if(!result) {
        return null;
    }

    return (
        <>
            <Text> {result.name} </Text>
            <FlatList
                data={result.photos}
                keyExtractor = {(photo) => photo.photo.id}
                renderItem = {({item}) => {
                    return <Image style = {styles.imageStyle} source ={{uri : item.photo.url}}/>
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        height:200,
        width: 300,
        marginBottom: 10
    }
});

export default ResultScreen;