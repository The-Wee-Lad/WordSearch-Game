import './App.css';
import './components/Grid.jsx'
import {Header} from './components/Header.jsx'
import { Wordsearch } from './components/Wordsearch.jsx';


function App() {

let letters = [];
for(let i = 0; i < 15*15; i++)
    letters.push("A");
let content = {info : {theme:"testing", author:"testing", createdAt:"testing", likes:"testing"}, 
              letters,
              solution :  new Set(["AAAA","AAA","AAAAA","AAAAAA","AAAAAAAAA","AAAAAAAA","AAAAAAAAAA","AAAAAAAAAAAAAA"]),
              size : 14};

  return (
    <>
      <Header/>
      <Wordsearch content = {content}/>
      
    </>
  )
}

export default App
