import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Student, Person, Employee, Dragon, NinjaWarrior, SwordWarrior, Character, Warrior } from './Person';

function App() {
  let studentsArr: Student[];
  let peopleArr: Person[];
  let employeesArr: Employee[];

  // let st1 = new Student(); // We connot create instance from type
  // let p1 = new Person(); // We connot create instance from interface
  // let e1 = new Employee(); // We can create instances from class

  // Union of deferent types (Employee is deferent)
  // let x: Employee | Dragon | NinjaWarrior | SwordWarrior = new Employee();
  // x = new Employee()
  // x = new Dragon()
  // x = new NinjaWarrior()
  // x = new SwordWarrior()

  // let x2: Employee | Character = new Employee();
  // x2 = new Employee()
  // x2 = new Dragon()
  // x2 = new NinjaWarrior()
  // x2 = new SwordWarrior()

  // All types must implement same father
  //let characterArr = [new Dragon(), new NinjaWarrior(), new SwordWarrior(), new Employee()];
  // let characterArr = [new Dragon(), new NinjaWarrior(), new SwordWarrior()];
  // for (const curr of characterArr) {
  //   curr.animate()
  // }

  let characterArr2: Character[] = [new Dragon(), new NinjaWarrior(), new SwordWarrior()];
  for (const curr of characterArr2) {
    curr.animate();

    // Check if the instance is of type
    if (curr instanceof Warrior) {
      curr.goToTrain();
    }

    // check if property or function in instance
    if ("goToTrain" in curr) {
      (curr as Warrior).goToTrain();
      (curr as any).goToTrain();

      let temp: unknown = curr;
      (temp as Warrior).goToTrain();
    }
  }

  // Destructering
  let carInfo = {
    model: "Cleo",
    manufacturer: "Renault",
    year: 2022
  }

  function takeCar(c: {
    model: string,
    manufacturer: string,
    year: number
  }) {
    console.log("inside takeCar");
    // changes to c will chage the original object carInfo
    //c.model = "Megan"

    let myCar = { ...c };
    myCar.year = 2023;
    console.log("did year changed? ", myCar, c);


    let myCar2 = { ...c, model: "Megane" };
    myCar2.year = 2023;
    console.log("[myCar2] did year and model changed? ", myCar, c);

  }

  takeCar(carInfo);


  // let { model, year } = carInfo;
  // console.log("Distructoring: ", model, year);

  // This example shows how to give new names to props in obj
  let { model: newModel, year: newYear } = carInfo;
  console.log("Distructoring: ", newModel, newYear);

  //-----------------------------

  let jhonny = {
    name: {
      salutation: {
        lang: "Hebrew",
        title: "Mr"
      },
      first: "jhonny",
      last: "depp"
    },
    email: "js@gmail.com",
    picture: {
      large: "http://mypics.com"
    }
  }

  // Descructing "name" 
  // let { name: { first } } = jhonny;

  // Another way to do "half destruct" and get the name
  //let { first } = jhonny.name;

  let { name: { salutation: { title } } } = jhonny;
  console.log("title is ", title);


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((datFromApi) => {
        return datFromApi.json();
      })
      .then((dataAsObj) => {
        console.log(dataAsObj);
        // class example
        // let employeesArr: Employee[]; // Employee is a class
        // employeesArr = dataAsObj.results;
        // for (let i = 0; i < employeesArr.length; i++) {
        //   console.log(employeesArr[i].name.first);
        // }

        // interface example
        // let peopleArr: Person[]; // Person is an interface
        // peopleArr = dataAsObj.results;
        // for (let i = 0; i < peopleArr.length; i++) {
        //   console.log(peopleArr[i].name.first);
        // }

        // type example
        let studentsArr: Student[]; // Student is a type
        studentsArr = dataAsObj.results;
        for (let i = 0; i < studentsArr.length; i++) {
          console.log(studentsArr[i].name.first);

          // calling static members
          console.log(Employee.nameOfCompany);
          console.log(Employee.showInfo());
        }
      })
      .catch((err) => {
        console.log('Error while trying to fetch people from api');
      })
  }, []);

  return (
    <div className="App">
      <p>This is my story</p>
      <ul>
        <li>Tel Aviv</li>
        <li>New York</li>
        <li>Paris</li>
      </ul>
    </div>
  );
}

export default App;
