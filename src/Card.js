/* eslint-disable no-template-curly-in-string */
import React from 'react';

/*Card component is produce a card that include img, h2, email for input from robots.js*/

const Card = ({name, email, id}) =>{
    return(
        <div className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );


}

export default Card;