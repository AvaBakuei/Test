import React from 'react';
import ListItem from "../ListItem";
import './style.css';

const List = ({users}) => {
    return(
        <div className="list">
            {users.map(item => (
                <ListItem
                    key={item.id}
                    name={item.name}
                    email={item.email}
                    url={item.website}
                    id={item.id}
                />
            ))}
        </div>
    )
}

export default List;