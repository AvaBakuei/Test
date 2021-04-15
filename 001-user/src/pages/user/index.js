import React, { useState, useEffect} from "react";
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import isEmpty from "../../utils/helpers/isEmpty";

const User = (props) => {
    const userId = props.match.params.id;
    const [state, setState] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => {
                if(response.status === 200) {
                    if(isLoading) {
                        setTimeout(() => {
                            setLoading(false);
                            setState(response.data);
                        }, 3000);
                    }
                }
            })
    }, []);
    return(
        <div>
            {!isLoading && isEmpty(state)
                ? <span>User is Not Found!</span> : (
                    <div>
                        <div>{isLoading ? <Skeleton/> : state.name}</div>
                        <div>{isLoading ? <Skeleton/> : state.username}</div>
                        <div>{isLoading ? <Skeleton/> : state.address?.city}</div>
                    </div>
            )}
        </div>
    )
}

export default  User;