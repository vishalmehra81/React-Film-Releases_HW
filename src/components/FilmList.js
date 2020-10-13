import React from 'react';
import Film from './Film.js';

export default function FilmList(props){
    const filmNodes = props.films.map(film =>{
        return <Film name={film.name} key={film.url}></Film>
    });

    return(
        <div>
            <ul>
            {filmNodes}
            </ul>
            
        </div>
    )
}