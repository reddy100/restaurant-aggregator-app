import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
const [term, setTerm] = useState('')
const [searchAPI, results, errorMessage] = useResults();

const filterResultsByPrice = (price) => {
    return results.filter(result => {
        return price >= 3 ? result.restaurant.price_range >=3 : result.restaurant.price_range == price;
    });
};

    return (
        <View style = {{flex:1}}>
            <SearchBar 
                term = {term} 
                onTermChange = {(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchAPI(term)}/>
            {errorMessage.length != 0 ? <Text> {errorMessage} </Text> : null}
            <ScrollView>
                <ResultsList results = {filterResultsByPrice(1)}  title = 'Cost Effective'/>
                <ResultsList results = {filterResultsByPrice(2)} title = 'Bit Pricier'/>
                <ResultsList results = {filterResultsByPrice(3)} title = 'Big Spender'/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;