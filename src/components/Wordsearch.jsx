import { Grid } from './Grid.jsx'
import { Solutions } from './Solutions.jsx';
import { Info } from './Info.jsx';
import { useState } from 'react';

function Wordsearch({content}) {

    let [solution, setSolution] = useState(new Set([...content.solution]));
    let [solvedStrings, setSolvedStrings] = useState(new Set());
    let [win, setWin] = useState(false);
    let [key, newKey] = useState(Date.now());

    const winDiv = <div style={{display: `${win?"flex":'none'}`}}
    className='bg-cyan-500 rounded-2xl m-1 p-2 flex justify-center text-2xl text-orange-300 font-bold'
    onClick={()=>{
        setSolution(new Set([...content.solution]))
        setSolvedStrings(new Set());
        newKey(Date.now());
        setWin(false);
    }}>
        Grid Completed click here to reset
    </div>
    if(solution.size == 0 && !win){
        setWin(true);
    }
    return (
        <div className='flex flex-col max-w-[500px] m-auto justify-center gap-2 p-2 bg-[#3b746c] rounded-2xl overflow-clip'>
            <Info info={content.info}/>
            <Solutions solvedStrings={solvedStrings} solutions={solution} />
            <div className="flex justify-center flex-col">
                <Grid 
                    key = {key}
                    content={content}
                    solution={solution}
                    setSolution={setSolution}
                    setSolvedStrings={setSolvedStrings}
                    win = {win} />
                {winDiv}
            </div>
        </div>
    );
}

export {Wordsearch};