import './App.css';
import './components/Grid.jsx'
import {Header} from './components/Header.jsx'
import { Wordsearch } from './components/Wordsearch.jsx';


function App() {

let letters = [
  "L", "V", "M", "S", "N", "W", "X", "R", "S", "R",
  "U", "L", "A", "I", "U", "H", "E", "U", "E", "K",
  "C", "D", "Y", "R", "Y", "R", "R", "K", "N", "U",
  "K", "K", "E", "G", "A", "A", "A", "O", "Z", "S",
  "N", "O", "D", "W", "D", "N", "R", "T", "U", "H",
  "O", "Y", "A", "P", "A", "M", "S", "A", "T", "W",
  "W", "H", "A", "T", "B", "N", "R", "S", "E", "A",
  "J", "J", "P", "A", "I", "N", "C", "A", "I", "H",
  "C", "A", "L", "S", "A", "T", "F", "G", "I", "A",
  "M", "R", "U", "P", "N", "A", "T", "L", "U", "S"
]

let size = Math.sqrt(letters.length);
let content = {info : {theme:"Places", author:"Aditya Narayan", createdAt:"testing", likes:"testing", size:`${size}x${size}`}, 
              letters,
              solution :  new Set(["LUCKNOW","VARANASI","ETAWAH",
                "BADAYUN","SULTANPUR","PUNE","SURAT","DELHI","AZAMGARH","AHMEDABAD"]),
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
