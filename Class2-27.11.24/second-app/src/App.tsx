import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Person } from './types';

function App() {

  const [peopleArr, setPeopleArr] = useState([
    {
      name: {
        first: "jhon",
        last: "doe"
      },
      email: "mail@mail.com",
      picture: {
        large: "pictire..."
      }
    }
  ]);

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


  return (
    <div className="App">
      <div>--- {peopleArr[0].name.first} ---</div>
    </div>
  );
}

export default App;
