import { Grid } from './Grid.jsx'
import { Solutions } from './Solutions.jsx';
import { Info } from './Info.jsx';
import { useState } from 'react';

function Wordsearch({content}) {

    let [solution, setSolution] = useState(new Set([...content.solution]));
    let [solvedStrings, setSolvedStrings] = useState(new Set());

    return (
        <div className='flex flex-col max-w-[500px] m-auto mt-5 justify-center gap-2 p-2 bg-[#303030] rounded-2xl overflow-clip'>
            <Info info={content.info}/>
            <Solutions solvedStrings={solvedStrings} solutions={solution} />
            <div className="flex justify-center ">
                <Grid content={content}
                    solution={solution}
                    setSolution={setSolution}
                    setSolvedStrings={setSolvedStrings} />
            </div>
        </div>
    );
}

export {Wordsearch};