import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from "../../components/List";

const UserList = (props) => {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((responses) => {
                setState(responses.data);
                setIsLoading(false);
            })
            .catch((error)=> {
                console.log(error);
            });
    }, [])

    return(
        <List users={state} isLoading={isLoading}/>
    )
}

export default UserList;