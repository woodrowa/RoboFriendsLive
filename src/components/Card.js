import React from 'react';

// const Card = (props) => {
//     return (
//        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//            <img src={`https://robohash.org/${props.id}?200x200`} alt='robots'/>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//        </div>
//     );
// };
//can only return one thing

//same as the top
const Card = ({ name, email, id }) => {
    //this is destructuring the props
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};
//you have to export the file to use in other files
export default Card;