import React from 'react';

export default function Film(props){
    return (
        <div>
             <li className="film_list">
                 <a href={props.children}>{props.name}</a>
             </li>
        </div>
    )
}