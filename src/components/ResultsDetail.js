import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style = {styles.container}>
            <Image source = {{uri : result.restaurant.thumb ? result.restaurant.thumb : null}} style = {styles.imageStyle}/>
            <Text style = {styles.name}>{result.restaurant.name} </Text>
            <Text>
                {result.restaurant.user_rating.aggregate_rating} Stars, {result.restaurant.all_reviews_count} Reviews
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        height: 150,
        width:250,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    },
    container: {
        marginLeft: 15
    }

})

export default ResultsDetail;