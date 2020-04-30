import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async(searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params : {
                    start: 0,
                    count: 100,
                    entity_type: 'city',
                    entity_id: 280,
                    q: searchTerm
                }
            })
            setResults(response.data.restaurants)
        }
        catch(e){
            console.log(e)
            setErrorMessage('Something went wrong')
        }
    };

    useEffect(() => {
        searchAPI('pasta');
    }, []);

    return [searchAPI, results, errorMessage];
}