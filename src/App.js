import React, { useState } from "react";
import "./App.css";

function App() {
  const originalArray = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(originalArray);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  const forEach = () => {};

  const filter = () => {
    const Filter = array.filter((item) => item.includes(userInput));
    setResult(Filter.join(", "));
  };

  const map = () => {
    const Map = array.map((item) => item.toUpperCase());
    setResult(Map.join(", "));
  };

  const reduce = () => {
    const Reduce = array.reduce((acc, cur) => `${acc} + ${cur}`);
    setResult(Reduce);
  };

  const push = () => {
    const newArr = [...array, userInput];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const pop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const slice = () => {
    const Slice = array.slice(0, -2);
    setArray(Slice);
    setResult(Slice.join(", "));
  };

  const splice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const indexOf = () => {
    const Index = array.indexOf(userInput);
    setResult(Index.toString());
  };

  const includes = () => {
    const Include = array.includes(userInput);
    setResult(Include.toString());
  };

  const find = () => {
    const Found = array.find((item) => item.includes(userInput));
    setResult(Found || "Not Found");
  };

  const some = () => {
    const Some = array.some((item) => item.includes(userInput));
    setResult(Some.toString());
  };

  const every = () => {
    const Every = array.every((item) => item.length > 5);
    setResult(Every.toString());
  };

  const sort = () => {
    const Sort = [...array].sort();
    setArray(Sort);
    setResult(Sort.join(", "));
  };

  const join = () => {
    const Join = array.join(", ");
    setResult(Join);
  };

  return (
    <div className="App">
      <h1>Standard반 배열 API</h1>
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={forEach}>forEach</button>
        <button onClick={filter}>filter</button>
        <button onClick={map}>map</button>
        <button onClick={reduce}>reduce</button>
        <button onClick={push}>push</button>
        <button onClick={pop}>pop</button>
        <button onClick={slice}>slice</button>
        <button onClick={splice}>splice</button>
        <button onClick={indexOf}>indexOf</button>
        <button onClick={includes}>includes</button>
        <button onClick={find}>find</button>
        <button onClick={some}>some</button>
        <button onClick={every}>every</button>
        <button onClick={sort}>sort</button>
        <button onClick={join}>join</button>
      </div>
      <div className="originalArray">
        <strong>원본배열 :</strong> {array.join(", ")}
      </div>
      <div className="result">
        <strong>결과물 :</strong> {result}
      </div>
    </div>
  );
}

export default App;
