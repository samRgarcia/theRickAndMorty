import {useEffect, useState} from 'react';
import axios from "axios";
import {LIST_ALL_CHAPTER} from "../constante";

export const useInitialStateApi = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        axios.get(LIST_ALL_CHAPTER)
            .then((res) => {
                setResults(res.data.results);
            })
            .catch(err => console.log(err))
    }, [setResults])


    return {
        results,
    }
}
