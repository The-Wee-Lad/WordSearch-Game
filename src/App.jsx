import './App.css';
import './components/Grid.jsx'
import {Header} from './components/Header.jsx'
import { Wordsearch } from './components/Wordsearch.jsx';


function App() {

let letters = [
  "L", "V", "M", "S", "N", "I", "X", "R", "S", "D",
  "U", "L", "A", "I", "U", "H", "H", "U", "E", "A",
  "C", "D", "Y", "R", "Y", "R", "R", "L", "N", "B",
  "K", "K", "E", "G", "A", "A", "A", "O", "E", "A",
  "N", "O", "E", "W", "D", "N", "R", "T", "U", "D",
  "O", "Y", "N", "P", "A", "M", "A", "A", "T", "E",
  "W", "H", "U", "T", "B", "W", "R", "S", "E", "M",
  "J", "J", "P", "A", "A", "N", "C", "A", "I", "H",
  "C", "A", "L", "H", "A", "T", "F", "G", "I", "A",
  "M", "R", "U", "P", "N", "A", "T", "L", "U", "S"
]

let size = Math.sqrt(letters.length);
let content = {info : {theme:"Places", author:"Aditya Narayan", createdAt:"testing", likes:"testing", size:`${size}x${size}`}, 
              letters,
              solution :  new Set(["LUCKNOW","VARANASI","ETAWAH",
                "BADAYUN","SULTANPUR","PUNE","SURAT","DELHI","AHMEDABAD"].sort()),
              size};
  return (
    <>
      <Header/>

      <Wordsearch content = {content}/>
      <a href="https://github.com/The-Wee-Lad/WordSearch-Game/"><div className='m-2 bg-black text-white border-2 rounded-xl w-fit p-2'>Made by Aditya Narayan</div></a>
    </>
  )
}

export default App
