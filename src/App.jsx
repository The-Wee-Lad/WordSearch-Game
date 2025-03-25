import './App.css';
import './components/Grid.jsx'
import { Grid } from './components/Grid.jsx';
import {Header} from './components/Header.jsx'
import { Solutions } from './components/solutions.jsx';
import { useState } from 'react';


function App() {

let letters = [];
for(let i = 0; i < 15*15; i++)
    letters.push("A");
let content = {theme : "random", letters,solution :  new Set(["AAAA","AAA","AAAAA","AAAAAA","AAAAAAAAA","AAAAAAAA","AAAAAAAAAA","AAAAAAAAAAAAAA"]),size : 14}

let [solution,setSolution] = useState(new Set([...content.solution]));
let [solvedStrings,setSolvedStrings] = useState(new Set());

  return (
    <>
      <Header/>
      <Solutions solvedStrings={solvedStrings} solutions={solution}/>
      <div className="flex justify-center ">
        <Grid content={content}
        solution = {solution}
        setSolution = {setSolution}
        solvedStrings = {solvedStrings}
        setSolvedStrings = {setSolvedStrings}/>
      </div>
      
      
    </>
  )
}

export default App
