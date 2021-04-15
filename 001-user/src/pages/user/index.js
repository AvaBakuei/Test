import React, { useState, useEffect} from "react";
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import isEmpty from "../../utils/helpers/isEmpty";

const User = (props) => {
    const userId = props.match.params.id;
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => {
                setState(response.data);
                setIsLoading(false);
            })
    }, []);
    return(
        <div>
            {!isLoading && isEmpty(state)
                ? <span>User is Not Found!</span> : (
                    <div>
                        <div>{isLoading ? <Skeleton/> : state.name}</div>
                        <div>{isLoading ? <Skeleton/> :state.username}</div>
                        <div>{isLoading ? <Skeleton/> :state.address?.city}</div>
                    </div>
                )
            }
        </div>
    )
}

export default  User;