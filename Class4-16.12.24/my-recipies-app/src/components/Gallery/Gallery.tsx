import './Gallery.css';
import { useEffect, useState } from 'react';
import { Person } from '../../types';
import PersonCard from '../PersonCard/PersonCard';

const Gallery = () => {

    const  [peopleArr, setPeopleArr] = useState<Person[]>();

    useEffect(() => {
        const randomPeolpeUrl = 'https://randomuser.me/api/?results=50';
        fetch(randomPeolpeUrl)
        .then((response) => response.json())
        .then((dataAsObj) => {
            console.log(dataAsObj);
            setPeopleArr(dataAsObj.results);
        })
        .catch((error) => {
            console.error('Error fetching and setting people arr', error);
        })
    }, []);

    return (
        <div className='gallery'>


       {peopleArr?.map((person) =>{
        return <PersonCard key={person.login.uuid} fname={person.name.first} lname={person.name.last} pic={person.picture.large} />
       })};
          
        </div>
    );
}

export default Gallery
