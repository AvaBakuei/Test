import React from 'react';
import Skeleton from 'react-loading-skeleton';
import ListItem from "../ListItem";
import './style.css';

const List = ({users, isLoading}) => {
    return(
        <div className="list">
            {isLoading ? <Skeleton count={10}/> : (
                users.map(item => (
                    <ListItem
                        key={item.id}
                        name={item.name}
                        email={item.email}
                        url={item.website}
                        id={item.id}
                    />
                ))
            )}
        </div>
    )
}

export default List;