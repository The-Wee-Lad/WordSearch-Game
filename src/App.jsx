import './App.css';
import './components/Grid.jsx'
import { Grid } from './components/Grid.jsx';

let letters = [];
let size = 14;
for(let i = 0; i < size*size; i++)
    letters.push("A");

function App() {


  return (
    <>
      <h1 className="text-4xl text-[#71797E] font-bold p-8">
        Wordsearch
      </h1>
      <div className="flex justify-center ">
        <Grid content={{theme:"shit", letters:letters, size}}/>
      </div>
      
      
    </>
  )
}

export default App
