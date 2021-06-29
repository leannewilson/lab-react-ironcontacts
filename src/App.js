import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState(contacts.splice(0, 5));
  const [rest, setRest] = useState(contacts);

  const ShowItems = () => {
    let newItemsArray = list.map((eachcontacts) => {
      return (
        <tr className="table">
          <td>
            <img src={eachcontacts.pictureUrl} width="75" />
          </td>
          <td>{eachcontacts.name}</td>
          <td>{eachcontacts.popularity.toFixed(2)}</td>
          <td>
            <button onClick={deletContact}>Delete</button>
          </td>
        </tr>
      );
    });
    return newItemsArray;
  };

  const addRandomContact = (i) => {
    let restOfContacts = [...rest];
    let randomIndex = Math.floor(Math.random() * restOfContacts.length);
    let random = restOfContacts[randomIndex];
    let copyOfList = [...list];
    copyOfList.push(random);
    setList(copyOfList);
    let copyOfRest = [...rest];
    copyOfRest.splice(randomIndex, 1);
    setRest(copyOfRest);
  };

  const sortPopular = () => {
    let popularList = [...list];
    popularList.sort((a, b) => b.popularity - a.popularity);
    setList(popularList);
  };

  const sortName = () => {
    let nameList = [...list];
    nameList.sort((a, b) => a.name.localeCompare(b.name));
    setList(nameList);
  };

  const deletContact = (i) => {
    let copyOfList = [...list];
    copyOfList.splice(i, 1);
    setList(copyOfList);
  };

  return (
    <div className="App">
      <header>
        <b>IronContacts</b>
      </header>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortName}>Sort by name</button>
      <button onClick={sortPopular}>Sort by popularity</button>

      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
      <ShowItems />
    </div>
  );
}

export default App;
