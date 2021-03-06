import React from 'react'
import './tinderCards.css'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Knaan",
            url: "https://c8d8q6i8.stackpathcdn.com/wp-content/uploads/2016/01/Knaan-Contact-Information.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "data:image/jpeg;base64,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"
        },
        {
            name: "Keri Hilson ",
            url: "https://pbs.twimg.com/profile_images/1406445633062551552/6HOpPBkL.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing"+nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{ person.name}</h3>
                         </div>

                    </TinderCard>
                ))}
             </div>
        </div>
        
    )
}

export default TinderCards
