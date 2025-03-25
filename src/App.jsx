import './App.css';
import './components/Grid.jsx'
import {Header} from './components/Header.jsx'
import { Wordsearch } from './components/Wordsearch.jsx';


function App() {

let letters = [
  "Q", "A", "M", "N", "N", "W", "X", "R", "D", "R",
  "J", "L", "Y", "I", "J", "H", "E", "M", "E", "K",
  "Q", "D", "Y", "G", "S", "E", "J", "K", "N", "U",
  "H", "K", "E", "U", "X", "H", "Q", "O", "Z", "S",
  "K", "W", "D", "P", "T", "P", "R", "H", "K", "H",
  "R", "Y", "N", "T", "J", "M", "G", "A", "T", "W",
  "A", "R", "A", "A", "O", "N", "R", "Q", "E", "A",
  "J", "J", "P", "D", "I", "N", "C", "A", "Y", "H",
  "C", "Z", "L", "S", "A", "T", "F", "G", "I", "A",
  "M", "W", "Q", "N", "B", "V", "E", "N", "A", "L"
]

let size = Math.sqrt(letters.length);
let content = {info : {theme:"Surname", author:"Aditya Narayan", createdAt:"testing", likes:"testing", size:`${size}x${size}`}, 
              letters,
              solution :  new Set(["GUPTA","PANDEY","SINGH","RAJ","YADAV","MISHRA","KUSHWAHA","RAI"]),
              size};

  return (
    <>
      <Header/>

      <Wordsearch content = {content}/>
      
    </>
  )
}

export default App
