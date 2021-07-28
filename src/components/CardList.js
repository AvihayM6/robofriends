import React from 'react';
import Card from './Card'


/* CardList component is produce a Card component for each value in robots.js*/

const CardList = ({robots}) =>{
    const cardComp = robots.map((user, i) =>{
        return <Card key = {i} name={robots[i].name} email={robots[i].email} id={robots[i].id}/> //map should include return value
    })
    return(
        <div>
            {cardComp}
        </div> 
    ); // the component return
}

export default CardList;