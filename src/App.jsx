import './App.css';
import './components/Grid.jsx'
import {Header} from './components/Header.jsx'
import { Wordsearch } from './components/Wordsearch.jsx';


function App() {

let letters = [
  "Q", "A", "M", "N", "N", "W", "X", "R", "D", "R",
  "J", "L", "Y", "I", "J", "H", "E", "M", "E", "K",
  "Q", "D", "Y", "G", "S", "E", "J", "K", "N", "U",
  "H", "K", "E", "G", "X", "H", "Q", "O", "Z", "S",
  "L", "O", "D", "U", "T", "P", "R", "H", "K", "H",
  "R", "Y", "N", "P", "J", "M", "G", "A", "T", "W",
  "A", "R", "A", "T", "O", "N", "R", "Q", "E", "A",
  "J", "J", "P", "A", "I", "N", "C", "A", "Y", "H",
  "C", "A", "L", "S", "A", "T", "F", "G", "I", "A",
  "M", "W", "T", "N", "B", "Y", "A", "D", "A", "V"
]

let size = Math.sqrt(letters.length);
let content = {info : {theme:"Surname", author:"Aditya Narayan", createdAt:"testing", likes:"testing", size:`${size}x${size}`}, 
              letters,
              solution :  new Set(["GUPTA","PANDEY","SINGH","RAJ","YADAV","MISHRA","KUSHWAHA","RAI","JAT","LODU"]),
              size};

  return (
    <>
      <Header/>

      <Wordsearch content = {content}/>
      <a href="https://github.com/The-Wee-Lad"><div className='m-2 bg-black text-white border-2 rounded-xl w-fit p-2'>Made by Aditya Narayan</div></a>
    </>
  )
}

export default App
