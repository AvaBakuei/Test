import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ListItem = ({name, email, url, id}) => {
    return(
        <Link to={`/user/${id}`} className="list-item">
            <div>{name}</div>
            <div className="list-info">
                <a href={`http://${url}`} target={"_blank"} rel={'noreferrer noopener'}>{url}</a>
                <span>{email}</span>
            </div>
        </Link>
    )
}

export default ListItem;