import React,{useState, useEffect} from 'react';
import TinderCard from  'react-tinder-card';
import database from './firebase';
import './TinderCards.css';


function TinderCards() {

 const [people, setPeople] = useState([]);

 // VERY IMP FROM HERE WE ACTUALLY PULL REAL DATA FROM THE FIREBASE
 // Piece of code which runs based on condition
  useEffect(() => {
     //this is where code runs

    const unsubscribed = database
    .collection('people')
    .onSnapshot((snapshot) =>
         setPeople(snapshot.docs.map((doc) => doc.data()))
     );

     return () => {
         // this is cleanup..
         unsubscribed(); 
     }
      //this will run ONCE when the component loads, and never again
    }, []);



    return (
        <div>

           
             <div className='tinderCards_cardContainer'>

             {people.map(person =>(
                <TinderCard
                 className='swipe'
                 key={person.name}
                 preventSwipe={['up','down']}
                >
                  <div
                   style={{ backgroundImage: `url(${person.url})`}}
                   className='card'
                  >
                   <h3>{person.name}</h3>
                  </div>
                </TinderCard>
             ))}

            </div>
        </div>
    );
}

export default TinderCards
