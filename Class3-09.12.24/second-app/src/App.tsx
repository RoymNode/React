import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Person } from './types';
import PersonCard from './components/PersonCard/PersonCard';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsGallery from './components/ProductsGallery/ProductsGallery';


function App() {

  // const [peopleArr, setPeopleArr] = useState([
  //   {
  //     name: {
  //       first: "jhon",
  //       last: "doe"
  //     },
  //     email: "mail@mail.com",
  //     picture: {
  //       large: "pictire..."
  //     }
  //   }
  // ]);

  // let peopleArr: Person[] = [
  //   {
  //     name: {
  //       first: "jhon",
  //       last: "doe"
  //     },
  //     email: "mail@mail.com",
  //     picture: {
  //       large: "pictire..."
  //     }
  //   }
  // ];

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(
        (data) => {
          // peopleArr = data.results;
          setPeopleArr(data.results);
          console.log(peopleArr);
        }
      )
  }, []);

  const [peopleArr, setPeopleArr] = useState<Person[]>();


  return (
   <div className="App">
{/*     
      <div> {peopleArr && peopleArr[0] && peopleArr[0].name && peopleArr[0].name.first} </div>

      <PersonCard fname={'John'} lname='Doe' />  */}
      
     <ProductsGallery />
   </div>
  );

  // return (
  //   <div className="App">
  //     <div>--- {peopleArr[0].name.first} ---</div>
  //   </div>
  // );
}

export default App;
