import React, { useState, useEffect } from 'react';
// import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import List from "../../components/List";
import Loading from '../../utils/helpers/loading';

const UserList = (props) => {
    const ListLoading = Loading(List);
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
        <>
            {/* {isLoading ? <Skeleton count={10}/> : <List users={state}/>} */}
            <ListLoading isLoading={isLoading} users={state}/>
        </>
    )
}

export default UserList;