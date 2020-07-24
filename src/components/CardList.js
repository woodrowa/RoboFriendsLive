import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    //more efficient way to pass props down
    if (true) {
        throw new Error('Noooooooo!');
    }
    return(
        <div>
            {
                robots.map((user, i)=> {
                    //when you iterate over an array react needs a key property to keep track
                    //user can be any word
                    return <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        username={robots[i].username}
                        email={robots[i].email}
                    />
                })
            }
        </div>
    )
};

export default CardList;